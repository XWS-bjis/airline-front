import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Address, User } from '../model/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user:User = {} as User;
  public address: Address = {} as Address;
  public confirmPassword:String = '';
  public btnState:boolean = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public registerUser(){
    
    if(this.checkInput()){
      alert("Please fill all informations")
      return;
    }
  
   if(this.confirmPassword !== this.user.password){
    this.confirmPassword = '';
    alert("Passwords not matches")
   }else{
    this.user.address = this.address;
    this.auth.register(this.user).subscribe(
      () => {
        alert('Account created');
        this.router.navigate(['login'])
      },
      (error:Error)=>{
        alert('Username already exists in system');
         this.user.userName = '';
        }
    );
   }
  }

  public checkInput():boolean{
    if(this.user.name === undefined || this.user.surname === undefined
       || this.user.userName === undefined || this.user.email === undefined || this.user.password === undefined 
       || this.address.country === undefined || this.address.postalCode === undefined || this.address.streetName === undefined
       || this.address.streetNumber === undefined || this.address.town === undefined){
      return true;
    }
    return false;
  }

}
