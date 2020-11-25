import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConsentModel } from '../../../models/consent.model';
import { ConsentsActions } from '../store/actions/consents.actions';
import { MainState } from '../store/reducers';

@Injectable()
export class ConsentsFacade {

  constructor(private store: Store<MainState>, private actions$: Actions) {
  }

  public getConsents(): void {
    this.store.dispatch(ConsentsActions.getConsents());
  }

  public createConsent(data: ConsentModel): void {
    this.store.dispatch(ConsentsActions.createConsent({ data }));
  }

  public createConsentSuccess$(): Observable<ConsentModel> {
    return this.actions$.pipe(ofType(ConsentsActions.createConsent));
  }
}
