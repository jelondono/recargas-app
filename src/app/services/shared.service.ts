import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environtment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private readonly baseUrl = environment.apiUrl;

  private readonly historialDataSubject = new BehaviorSubject<any[]>([]);
  historialData$ = this.historialDataSubject.asObservable();

  private readonly statsUpdatedSubject = new Subject<void>();
  statsUpdated$ = this.statsUpdatedSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  loadTransactionsBySeller(sellerId: number): void {
    this.http
      .get<any[]>(`${this.baseUrl}/topups/by-seller/${sellerId}`)
      .subscribe((data) => {
        this.historialDataSubject.next(data);
      });
  }

  loadTransactionsByOperator(operatorId: number): void {
    this.http
      .get<any[]>(`${this.baseUrl}/topups/by-operator/${operatorId}`)
      .subscribe((data) => {
        this.historialDataSubject.next(data);
      });
  }

  notifyStatsUpdated(): void {
    this.statsUpdatedSubject.next();
  }
}
