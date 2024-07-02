import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BaseUrl = 'https://upskilling-egypt.com:3007/api/';
    const token = localStorage.getItem('token');
    const newRequest = request.clone({
      url: request.url.includes('assets') ? request.url : BaseUrl + request.url,
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(newRequest);
  }
}
