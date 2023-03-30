import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightService } from '../service/flight.service';


@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit{


   public flight: Flight = {} as Flight;

   errorMessage = "";

  constructor(private flightService: FlightService, private router: Router, private http: HttpClient) { }


  ngOnInit(){
  }

  //OVO RADI DOBRO

  // saveFlight(){
  //   this.flightService.createFlight(this.flight).subscribe(
  //     data => {
  //       console.log(data);
  //        this.router.navigate(['']);
  //     }, 
  //     error => console.log(error));    
  //   }

  saveFlight() {

    this.errorMessage = "";

    //ovde ne radi dobro za brojeve, prolazi iako ostane nula
    if (!this.flight.takeOfDate || !this.flight.landingDate || !this.flight.departurePlace  || !this.flight.landingPlace || this.flight.ticketPrice === undefined || this.flight.totalSeatsNumber === undefined || this.flight.availableSeatsNumber === undefined) {
      this.errorMessage = "Data invalid";
      return;

    }

    this.flightService.createFlight(this.flight).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
    }, error => {
      console.log(error);
      this.errorMessage = error.message;
    })
  }


  onSubmit(){
    console.log(this.flight);
    this.saveFlight();
  }
}


