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

  constructor(private flightService: FlightService, private router: Router, private http: HttpClient) { }


  ngOnInit(){
  }

  

  saveFlight(){

    //AKO SU POLJA PRAZNA DA IZADJE GRESKA NPR: Data invalid

    // this.errorMessage = "";

    // if (!this.flight || !this.street || !this.number  || !this.description || this.averageRate === 0 || this.administrator === 0) {
    //   this.errorMessage = "Data invalid";
    //   return;

    // }

    this.flightService.createFlight(this.flight).subscribe(
      data => {
        console.log(data);
         this.router.navigate(['']);
      },
      error => console.log(error));
  }


  onSubmit(){
    console.log(this.flight);
    this.saveFlight();
  }
}


