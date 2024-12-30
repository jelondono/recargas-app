import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-seller-selection-dialog',
  templateUrl: './seller-selection-dialog.component.html',
  styleUrls: ['./seller-selection-dialog.component.scss'],
})
export class SellerSelectionDialogComponent {
  selectedSeller: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<SellerSelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sellers: { id: number; name: string }[] }
  ) {
  }

  onSelectSeller(): void {
    this.dialogRef.close(this.selectedSeller);
  }

  onSelectionChange(event: any): void {
    this.selectedSeller = event.value;
  }
}
