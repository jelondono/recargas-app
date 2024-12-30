import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatRadioModule
  ],
  exports: [
    StatisticsComponent
  ]
})
export class StatisticsModule { }
