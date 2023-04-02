import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsPageComponent } from './components/flight/flights-page/flights-page.component';
import { AllReservationComponent } from './components/reservation/all-reservation/all-reservation.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { CreateFlightComponent } from './components/flight/create-flight/create-flight.component';
import { AuthGuardService as AuthGuard } from './components/users/shared/auth-guard.service';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: FlightsPageComponent},
    {path: 'my-flights', component: AllReservationComponent, canActivate:[AuthGuard]},
    {path: 'register', component: RegisterComponent},
    {path: "flight/create-flight", component: CreateFlightComponent},
    {path: "create-flight", component: CreateFlightComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
