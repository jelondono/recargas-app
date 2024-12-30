import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SellerSelectionDialogComponent } from 'src/app/features/topup/components/seller-selection-dialog/seller-selection-dialog.component';
import { SellerService } from 'src/app/services/sellers/seller.service';
import { TopUpService } from 'src/app/services/topup/topup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sellerName: string = '';

  constructor(
    private readonly dialog: MatDialog,
    private readonly sellerService: SellerService
  ) {}

  ngOnInit(): void {
    this.openSellerSelectionDialog();
  }

  openSellerSelectionDialog(): void {
    this.sellerService.getSellers().subscribe({
      next: (sellers) => {
        const dialogRef = this.dialog.open(SellerSelectionDialogComponent, {
          width: '300px',
          data: { sellers },
          disableClose: true,
        });

        dialogRef.afterClosed().subscribe((selectedSeller) => {
          if (selectedSeller) {
            const selected = sellers.find((s: any) => s.id === selectedSeller);
            this.sellerName = selected?.name || 'Sin nombre';
            this.sellerService.setSelectedSeller(selectedSeller);
          } else {
            alert('Debe seleccionar un vendedor para continuar.');
            this.openSellerSelectionDialog();
          }
        });
      },
      error: (err) => {
        console.error('Error al cargar los vendedores:', err);
        alert('No se pudieron cargar los vendedores.');
      },
    });
  }
}
