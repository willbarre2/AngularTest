import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
    .append('Authorization', `Bearer ${this.auth.getToken()}`);
    // je clone la requette et j'y ajoute le header créé
    const modifiedReq = request.clone({ headers });
    return next.handle(modifiedReq);
  }
}
