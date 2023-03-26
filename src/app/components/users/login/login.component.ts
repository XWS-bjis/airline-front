import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginCredential, UserTokenState } from '../model/auth.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginCredential : LoginCredential = <LoginCredential>{};

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  public loginUser():void{
    this.auth.handleLogin(this.loginCredential);
  }
}
