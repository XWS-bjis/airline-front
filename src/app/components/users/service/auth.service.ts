import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginCredential, UserTokenState } from '../model/auth.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseApiUrl + '/auth/';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private accessToken = localStorage.getItem('jwt');
  private currentRole = localStorage.getItem('role');
  private authenticated = localStorage.getItem('role') ? true : false;
  private nav = new BehaviorSubject<string>(localStorage.getItem('jwt') ? 'true' : 'false');
  private currentUserId = localStorage.getItem('userId');
  public currentNav = this.nav.asObservable();

  constructor( 
    private router : Router,
    private http : HttpClient) {}

  public handleLogin(credentials : LoginCredential){
   this.login(credentials)
   .pipe(catchError(()=>{
    alert('Credentials are not valid')
    return of();
   }))
    .subscribe((response: UserTokenState) => {
     
      localStorage.setItem('jwt', response.accessToken);
      this.accessToken = response.accessToken;

      localStorage.setItem('role', response.role);
      this.currentRole = response.role;

      this.authenticated = this.currentRole ? true : false;

      localStorage.setItem('userId', response.userId ? response.userId : '-1');
      this.currentUserId = response.userId;

      this.nav.next('true');

      let decodedJWT;
      if (this.accessToken != null) {
        decodedJWT = JSON.parse(window.atob(this.accessToken.split('.')[1]));
      }
      this.router.navigate(['']);
    });
  }

  private login(credentials: LoginCredential) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<UserTokenState>(`${this.baseUrl}login`, JSON.stringify(credentials), { headers: headers })
  }

  public logout():void {
    this.accessToken = null;
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    localStorage.clear();
    this.nav.next('false');
    this.router.navigate(['']);
  }

  public register(user:User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}register`, JSON.stringify(user), { headers: this.headers }).pipe(catchError(this.handleError));
  }

  public handleError(error:HttpErrorResponse)
  {
    return throwError(error);
  }

  public getToken(){
    return this.accessToken;
  }

  public getRole(){
    return this.currentRole;
  }

  public getUserId(){
    return this.currentUserId;
  }

  public isAuthenticated(){
    return this.authenticated;
  }
}
