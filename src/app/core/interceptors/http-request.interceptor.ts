import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ApiEndpoints } from '../../constants/api-endpoints';

@Injectable()
export class HttpRequestInterceptor implements HttpRequestInterceptor {
  private availableRoutes: string[] = [
    ApiEndpoints.getConsents,
    ApiEndpoints.createConsent
  ];

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request.url', request.url);
    if (request.method === 'POST' && this.availableRoutes.includes(request.url)) {
      return of(new HttpResponse({ status: 200, body: request.body }));
    }

    if (request.method === 'GET' && request.url === ApiEndpoints.getConsents) {
      return of(new HttpResponse({ status: 200, body: request.body }));
    }

    return next.handle(request);
  }
}
