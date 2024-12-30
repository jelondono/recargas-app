import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SellerSelectionDialogComponent } from './components/seller-selection-dialog/seller-selection-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TopupComponent } from './components/topup.component';

@NgModule({
  declarations: [
    TopupComponent,
    SellerSelectionDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    TopupComponent
  ]
})
export class TopupModule { }
