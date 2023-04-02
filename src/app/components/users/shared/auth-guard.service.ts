import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( 
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean{
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/']);
      return false;
    }
      return true;
  }
}
