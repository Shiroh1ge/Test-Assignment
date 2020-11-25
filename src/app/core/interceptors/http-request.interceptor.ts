import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ApiEndpoints } from '../../constants/api-endpoints';
import { mockConsents } from '../../constants/mock-data';
import { ConsentModel } from '../../models/consent.model';
import { NumberUtilities } from '../../utilities/number.utilities';

@Injectable()
export class HttpRequestInterceptor implements HttpRequestInterceptor {
  private availableRoutes: string[] = [
    ApiEndpoints.getConsents,
    ApiEndpoints.createConsent
  ];

  constructor() {
  }

  private static createConsent(data: ConsentModel): ConsentModel {
    return {
      ...data,
      id: NumberUtilities.getRandomId()
    };
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET' && request.url === ApiEndpoints.getConsents) {
      return of(new HttpResponse({ status: 200, body: mockConsents }));
    }

    if (request.method === 'POST' && this.availableRoutes.includes(request.url)) {
      return of(new HttpResponse({ status: 200, body: HttpRequestInterceptor.createConsent(request.body) }));
    }

    return next.handle(request);
  }
}
