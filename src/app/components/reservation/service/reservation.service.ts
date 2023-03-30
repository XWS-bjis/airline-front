import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservations } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl: string = environment.baseApiUrl + '/reservation/';
  headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(
    private http : HttpClient) {}
   
  buyingTickets(reservation: Reservations): Observable<Reservations> {
    return this.http.post<Reservations>(`${this.baseUrl}buy`, reservation, {headers: this.headers});
  }

  getAllReservations(userId: string): Observable<Reservations[]> {
    return this.http.get<Reservations[]>(`${this.baseUrl}all/${userId}`, {headers: this.headers})
  }

  getUsername(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}getUsername/${userId}`, {responseType: 'text'})
  }

}
