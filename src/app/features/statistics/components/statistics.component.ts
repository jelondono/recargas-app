import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { StatisticsService } from 'src/app/services/statistics/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  estadisticas: any[] = [];
  reportType: 'seller' | 'operator' = 'seller';
  private statsUpdatedSubscription!: Subscription;

  constructor(
    private readonly estadisticasService: StatisticsService,
    private readonly sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loadEstadisticas();
    this.statsUpdatedSubscription = this.sharedService.statsUpdated$.subscribe(() => {
      this.loadEstadisticas();
    });
  }

  loadEstadisticas(): void {
    if (this.reportType === 'seller') {
      this.estadisticasService.getEstadisticasBySeller().subscribe({
        next: (data: any[]) => {
          this.estadisticas = data;
        },
        error: (err) => {
          console.error('Error al cargar las estadísticas por vendedor:', err);
        },
      });
    } else {
      this.estadisticasService.getEstadisticasByOperator().subscribe({
        next: (data: any[]) => {
          this.estadisticas = data;
        },
        error: (err) => {
          console.error('Error al cargar las estadísticas por operador:', err);
        },
      });
    }
  }

  onCardClick(estadistica: any): void {
    if (this.reportType === 'seller') {
      this.sharedService.loadTransactionsBySeller(estadistica.id);
    } else if (this.reportType === 'operator') {
      this.sharedService.loadTransactionsByOperator(estadistica.operatorId);
    }
  }
}
