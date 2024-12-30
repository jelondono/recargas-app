import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environtment';

@Injectable({
  providedIn: 'root',
})
export class SellerService {

  private readonly selectedSellerSubject = new BehaviorSubject<number | null>(null);
  selectedSeller$ = this.selectedSellerSubject.asObservable();
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  setSelectedSeller(sellerId: number): void {
    this.selectedSellerSubject.next(sellerId);
  }

  getSelectedSeller(): number | null {
    return this.selectedSellerSubject.value;
  }

  getSellers(): Observable<any[]> {
    const url = `${this.baseUrl}/sellers`;
    return this.http.get<any[]>(url);
  }
}
