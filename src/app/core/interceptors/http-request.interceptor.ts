
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpRequestInterceptor {
  private availableRoutes: string[] = [

  ]
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST' && request.url
      .indexOf(`https://dog.ceo/api/breeds/image/random`) > -1) {
      return
      of(new HttpResponse({ status: 200, body: mockDog }));
    }

    return next.handle(request);
  }
}
