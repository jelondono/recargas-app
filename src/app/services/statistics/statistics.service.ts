import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environtment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEstadisticasBySeller(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/statistics/by-seller`);
  }

  getEstadisticasByOperator(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/statistics/by-operator`);
  }
}
