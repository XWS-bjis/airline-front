import { Component } from '@angular/core';
import { AuthService } from '../../users/service/auth.service';
import { Reservations } from '../model/reservation';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-all-reservation',
  templateUrl: './all-reservation.component.html',
  styleUrls: ['./all-reservation.component.css']
})
export class AllReservationComponent {

  public reservations: Reservations[] = [];
  public totalTicketPrice: number = 0;
  public username: String = "";

  constructor(
    private reservationService: ReservationService,
    private auth: AuthService
  ) {}

  getReservations(): void {
    this.reservationService.getAllReservations(this.auth.getUserId() || "0").subscribe(data=>this.reservations = data);
  }

  ngOnInit(): void {
    this.getReservations();
    this.getUsername();
  }

  getUsername(): void {
      this.reservationService.getUsername(this.auth.getUserId() || "0").subscribe((response:any)=>{
      this.username = response;
    });
  }

}
