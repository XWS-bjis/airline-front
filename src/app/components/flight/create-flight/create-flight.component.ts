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


  //inicijalno prazno 
  //flight: Flight = new Flight();

  //create a variable to hold the list of roles and another variable to hold the selected role
  //destinations: Destination[];

  //landingPlace: Destination;   ----> not selectedDestination
  //departurePlace: Destination;
  


  
   takeOfDate: string = new Date().toISOString();
   landingDate: string = new Date().toISOString();
   landingPlace: string = "";
   departurePlace: string = "";
   ticketPrice: number = 0;
   totalSeatsNumber: number = 0;
   availableSeatsNumber: number = 0;


  constructor(private flightService: FlightService, private router: Router, private http: HttpClient) { }


  ngOnInit(){
    //make an HTTP GET request to your Spring Boot backend to retrieve the list of roles:

    //****************************************
    //  SPRING BOOT BACKEND:  create a GET endpoint that returns the list of enum values:
    /* 
               @RestController
               public class MyController {

                 @GetMapping("/destinations")
                 public Destination[] getDestinations() {
                    return Destination.values();
                 }
                }
     */ 


   // this.http.get<Destination[]>('/destinations').subscribe(destinations => {
     // this.destinations = destinations;
   // });
  }

  // saveFlight(){
  //   this.flightService.createFlight(this.flight).subscribe(
  //     data => {
  //       console.log(data);
  //       this.router.navigate(['/flight']);
  //     },
  //     error => console.log(error));
  // }

//  goToFlightList(){
//    this.router.navigate(['/flight']);
//  }

  // onSubmit(){
  //   console.log(this.flight);
  //   this.saveFlight();
  // }
   
  
}


