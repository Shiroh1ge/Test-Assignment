import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndpoints } from '../../../constants/api-endpoints';
import { ConsentModel } from '../../../models/consent.model';

@Injectable()
export class ConsentsService {

  constructor(private http: HttpClient) {
  }

  public getConsents(): Observable<ConsentModel[]> {
    return this.http.get<ConsentModel[]>(ApiEndpoints.getConsents);
  }

  public createConsent(data: ConsentModel): Observable<ConsentModel> {
    return this.http.post<ConsentModel>(ApiEndpoints.createConsent, data);
  }
}
