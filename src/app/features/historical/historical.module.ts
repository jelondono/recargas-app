import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HistoricalComponent } from './components/historical.component';



@NgModule({
  declarations: [
    HistoricalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  exports: [
    HistoricalComponent
  ]
})
export class HistoricalModule { }
