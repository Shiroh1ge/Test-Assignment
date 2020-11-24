import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ConsentsService } from '../../services/consents.service';
import { ConsentsActions } from '../actions/consents.actions';

@Injectable()
export class ConsentsEffects {
  getConsents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConsentsActions.getConsents),
      mergeMap(action =>
        this.consentsService
          .getConsents()
          .pipe(
            map(consents => ConsentsActions.getConsentsSuccess({ consents }))
          )
      )
    )
  );

  createConsent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConsentsActions.createConsent),
      mergeMap(({ data }) =>
        this.consentsService
          .createConsent(data)
          .pipe(map(consent => ConsentsActions.createConsentSuccess({ consent })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private consentsService: ConsentsService
  ) {
  }
}
