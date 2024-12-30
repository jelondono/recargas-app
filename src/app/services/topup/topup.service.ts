import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environtment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TopUpService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  sumbitTopUp(data: any): Observable<any> {
    const url = `${this.baseUrl}/topups`;
    return this.http.post(url, data);
  }

  getOperators(): Observable<{ name: string; value: number; image: string }[]> {
    return this.http.get<{ name: string; value: number; image: string }[]>(`${this.baseUrl}/operators`);
  }



}
