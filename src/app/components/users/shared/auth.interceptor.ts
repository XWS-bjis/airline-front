import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(public auth: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.auth.getToken()){
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });
        }
        return next.handle(req);
    }
}