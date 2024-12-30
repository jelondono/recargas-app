import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSelectionDialogComponent } from './seller-selection-dialog.component';

describe('SellerSelectionDialogComponent', () => {
  let component: SellerSelectionDialogComponent;
  let fixture: ComponentFixture<SellerSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSelectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
