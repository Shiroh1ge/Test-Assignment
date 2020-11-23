import { createAction, props } from '@ngrx/store';
import { ConsentModel } from '../../../models/consent.model';

export class ConsentsActions {
  public static getConsents = createAction(
    '[Consents] getConsents'
  );

  public static getConsentsSuccess = createAction(
    '[Consents] getConsentsSuccess',
    props<{ assessmentGroups: ConsentModel[] }>()
  );

  public static createConsentRequest = createAction(
    '[ConsoleAssessmentsListComponent] createConsentRequest',
    props<{ name: string }>()
  );

  public static createConsentSuccess = createAction(
    '[Consents] createConsentSuccess',
    props<{ group: ConsentModel }>()
  );
}

