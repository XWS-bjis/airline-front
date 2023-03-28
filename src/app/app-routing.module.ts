import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsPageComponent } from './components/flight/flights-page/flights-page.component';
import { LoginComponent } from './components/users/login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: FlightsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
