import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject, Observable, throwError, timer, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }
}








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
