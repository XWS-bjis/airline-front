import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightFilter } from '../model/flight-filter';
import { FlightService } from '../service/flight.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Reservations } from '../../reservation/model/reservation';
import { AuthService } from '../../users/service/auth.service';
import { ReservationService } from '../../reservation/service/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.css']
})
export class FlightsPageComponent implements OnInit {

  public flights: Flight[] = [];
  public flightFilter: FlightFilter = <FlightFilter>{};
  public totalPassengers: number = 0;

  getFlights(): void {
    this.service.getAll().subscribe(data => {
      this.flights = data;
    })
  }

  getFilteredFlights(): void{
    this.service.filter(this.flightFilter).subscribe(data => {
      this.totalPassengers = this.flightFilter.passengers
      this.flights = data;
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.flightFilter.searchDate = (`${event.value?.getFullYear()}/${(event.value?.getMonth() || 0) + 1}/${event.value?.getDate()}`);
  }

  constructor(
    private service: FlightService,
    private auth: AuthService,
    private reservationService: ReservationService,
    private router: Router
  ) { }

  public role:String = '';

  ngOnInit(): void {
    this.defineUserRole();
    this.getFlights();
  }

  buyTickets(id: string) {
    const reservation: Reservations = {
      flightId: id,
      userId: this.auth.getUserId(),
      ticketAmount: this.flightFilter.passengers,
    };
    this.reservationService.buyingTickets(reservation).subscribe(()=>{
      this.router.navigate(["my-flights"]);
    });
    //data => console.log(data)
  }

  defineUserRole(){
    switch(this.auth.getRole()){
      case "ROLE_ADMIN":
        this.role = "ROLE_ADMIN";
        break;
      case "ROLE_REGULAR":
        this.role = "ROLE_REGULAR";
        break;
      default:
        this.role = "";
        break;
    }
  }
}
