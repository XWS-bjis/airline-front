import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsPageComponent } from './components/flight/flights-page/flights-page.component';
import { AllReservationComponent } from './components/reservation/all-reservation/all-reservation.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { CreateFlightComponent } from './components/flight/create-flight/create-flight.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: FlightsPageComponent},
    {path: 'my-flights', component: AllReservationComponent},
    {path: 'register', component: RegisterComponent},
    {path: "flight/create-flight", component: CreateFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
