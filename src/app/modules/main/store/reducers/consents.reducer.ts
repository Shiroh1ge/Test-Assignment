import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ConsentModel } from '../../../../models/consent.model';
import { ConsentsActions } from '../actions/consents.actions';

import { ConsentsStateModel } from '../models/consents-state.model';


const consentsAdapter = createEntityAdapter<ConsentModel>({
  selectId: (consent: ConsentModel) => consent.id
});
const initialState: ConsentsStateModel = {
  consents: { ids: [], entities: {} }
};

export const consentsReducer = createReducer(
  initialState,
  on(ConsentsActions.getConsentsSuccess, (state, { consents }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.setAll(consents, state.consents)
    };
  }),
  on(ConsentsActions.createConsentSuccess, (state, { consent }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.addOne(consent, state.consents)
    };
  }),

);

export const { selectAll } = consentsAdapter.getSelectors();
