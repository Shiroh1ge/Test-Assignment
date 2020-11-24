import { createAction, props } from '@ngrx/store';
import { ConsentModel } from '../../../../models/consent.model';

export class ConsentsActions {
  public static createConsent = createAction(
    '[Consents] createConsentRequest',
    props<{ data: ConsentModel }>()
  );

  public static createConsentSuccess = createAction(
    '[Consents] createConsentSuccess',
    props<{ consent: ConsentModel }>()
  );

  public static getConsents = createAction(
    '[Consents] getConsents'
  );

  public static getConsentsSuccess = createAction(
    '[Consents] getConsentsSuccess',
    props<{ consents: ConsentModel[] }>()
  );
}

