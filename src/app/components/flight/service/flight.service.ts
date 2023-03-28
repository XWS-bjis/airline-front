import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../model/flight';
import { FlightFilter } from '../model/flight-filter';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  private baseUrl: string = environment.baseApiUrl + '/flight/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( 
    private router : Router,
    private http : HttpClient) {}
    
  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.baseUrl}all`, { headers: this.headers });
  }

  filter(filter: FlightFilter): Observable<Flight[]> {
    return this.http.post<Flight[]>(`${this.baseUrl}filter`, JSON.stringify(filter), { headers: this.headers })
  }
}
