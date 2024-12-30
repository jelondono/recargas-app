import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './components/historial.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  exports: [
    HistorialComponent
  ]
})
export class HistorialModule { }
