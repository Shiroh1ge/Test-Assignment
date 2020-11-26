import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConsentModel } from '../../../models/consent.model';
import { ConsentsActions } from '../store/actions/consents.actions';
import { ConsentsStateModel } from '../store/models/consents-state.model';
import { ConsentsSelectors } from '../store/selectors/consents.selectors';

@Injectable()
export class ConsentsFacade {
  public consents$ = this.store.pipe(select(ConsentsSelectors.selectAllConsents));

  constructor(private store: Store<ConsentsStateModel>, private actions$: Actions) {
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
