import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
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
            map(consents => ConsentsActions.getConsentsSuccess({ consents })),
            catchError(error => of(ConsentsActions.getConsentsError({ error })))
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
          .pipe(
            map(consent => ConsentsActions.createConsentSuccess({ consent })),
            catchError(error => of(ConsentsActions.createConsentError({ error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private consentsService: ConsentsService
  ) {
  }
}
