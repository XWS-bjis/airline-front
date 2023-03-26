import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/users/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userExists = '';
  public role = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.currentNav.subscribe(message =>{
      const role = this.authService.getRole();
      this.role = role ? role : '';
     this.userExists = message;
    })
  }

  public logout(){
    this.authService.logout();
    this.role = '';
  }
}
