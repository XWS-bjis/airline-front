import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightFilter } from '../model/flight-filter';
import { FlightService } from '../service/flight.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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
    private service: FlightService
  ) { }

  ngOnInit(): void {
    this.getFlights();
  }

}
