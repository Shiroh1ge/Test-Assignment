import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConsentModel } from '../../../models/consent.model';
import { ConsentsActions } from '../store/actions/consents.actions';
import { MainState } from '../store/reducers';

@Injectable()
export class ConsentsFacade {

  constructor(private store: Store<MainState>) {
  }

  public getConsents(): void {
    this.store.dispatch(ConsentsActions.getConsents());
  }

  public createConsent(data: ConsentModel): void {
    this.store.dispatch(ConsentsActions.createConsent({ data }));
  }
}
