import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SellerService } from 'src/app/services/sellers/seller.service';
import { SharedService } from 'src/app/services/shared.service';
import { TopUpService } from 'src/app/services/topup/topup.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss'],
})
export class TopupComponent implements OnInit {
  topUpForm: FormGroup; // Formulario para realizar recargas
  operators: { name: string; value: number; image: string }[] = []; // Lista de operadores
  predefinedAmounts = [1000, 2000, 3000, 5000, 10000, 20000]; // Valores de recarga predefinidos
  selectedSellerId: number | null = null; // ID del vendedor seleccionado

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly topUpService: TopUpService,
    private readonly sellerService: SellerService,
    private readonly sharedService: SharedService,
    private readonly snackBar: MatSnackBar
  ) {
    // Inicialización del formulario
    this.topUpForm = this.formBuilder.group({
      operator: [null, Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      amount: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // Suscripción para obtener el ID del vendedor seleccionado
    this.sellerService.selectedSeller$.subscribe((sellerId) => {
      this.selectedSellerId = sellerId;
    });

    // Cargar la lista de operadores
    this.loadOperators();
  }

  /**
   * Método para cargar los operadores desde el servicio
   */
  loadOperators(): void {
    this.topUpService.getOperators().subscribe({
      next: (data: { name: string; value: number; image: string; }[]) => {
        this.operators = data;
      },
      error: (err: any) => {
        console.error('Error al cargar operadores:', err);
        alert('Ocurrió un error al cargar los operadores.');
      },
    });
  }

  /**
   * Método para seleccionar un valor de recarga predefinido
   */
  selectAmount(amount: number): void {
    this.topUpForm.patchValue({ amount });
  }

  /**
   * Método para actualizar el valor en el campo "Otro valor"
   */
  updateAmount(event: Event): void {
    const input = event.target as HTMLInputElement;
    const parsedValue = parseFloat(input.value.replace(/[^0-9]/g, ''));
    this.topUpForm.patchValue({ amount: isNaN(parsedValue) ? null : parsedValue });
  }

  /**
   * Método para realizar la recarga
   */
  performTopUp(): void {
    if (this.topUpForm.valid && this.selectedSellerId) {
      const formData = this.topUpForm.value;

      // Crear el payload con los datos necesarios para la recarga
      const payload = {
        amount: formData.amount,
        quantity: 1,
        operatorId: formData.operator.id,
        sellerId: this.selectedSellerId,
      };

      // Llamar al servicio para realizar la recarga
      this.topUpService.sumbitTopUp(payload).subscribe({
        next: () => {
          this.snackBar.open('Recarga realizada con éxito!', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });
          // Reiniciar el formulario
          this.topUpForm.reset({
            operator: null,
            phoneNumber: '',
            amount: null,
          });

          // Notificar que las estadísticas han sido actualizadas
          this.sharedService.notifyStatsUpdated();

          // Limpiar el estado de validación de los controles del formulario
          Object.keys(this.topUpForm.controls).forEach((controlName) => {
            const control = this.topUpForm.get(controlName);
            if (control) {
              control.markAsPristine();
              control.markAsUntouched();
              control.setErrors(null);
            }
          });
        },
        error: (err) => {
          console.error('Error al realizar la recarga:', err);
          this.snackBar.open('Ocurrió un error al realizar la recarga.', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar'],
          });
        },
      });
    }
  }
}
