/*
 * Licensed Materials - Property of IBM
 * 
 * (c) Copyright IBM Corp. 2020.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject, Observable, throwError, timer, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';


//
// 
// The Security service will handle the authentication to the APIs
// It is used to populate the the APIs services with the tokens/cookies
// etc so that they will work and not have to worry about it.
// 
// 

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }
}

// Dummied out at the moment until we enable authentication in Galasa
@Injectable()
export class GalasaInterceptor implements HttpInterceptor {

  constructor(private securityService: SecurityService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!req.url.startsWith(environment.api)) {
    //   next.handle(req);
    // }

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      // if (error.status == 403) {
      //   this.securityService.logout(this.router.url);
      // }
      return throwError(error);
    }));
  }

}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: GalasaInterceptor, multi: true },
];
