import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ConsentModel } from '../../../../models/consent.model';
import { ConsentsActions } from '../actions/consents.actions';

import { ConsentsStateModel } from '../models/consents-state.model';


const consentsAdapter = createEntityAdapter<ConsentModel>({
  selectId: (consent: ConsentModel) => consent.id,
  sortComparer: (a, b) => a.createdAt > b.createdAt ? 1 : -1
});
const initialState: ConsentsStateModel = {
  consents: { ids: [], entities: {} },
  consentsLoading: false
};

export const consentsReducer = createReducer(
  initialState,
  on(ConsentsActions.getConsents, (state): ConsentsStateModel => {
    return {
      ...state,
      consentsLoading: true
    };
  }),
  on(ConsentsActions.getConsentsError, (state): ConsentsStateModel => {
    return {
      ...state,
      consentsLoading: false
    };
  }),

  on(ConsentsActions.getConsentsSuccess, (state, { consents }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.setAll(consents, state.consents),
      consentsLoading: false
    };
  }),
  on(ConsentsActions.createConsentSuccess, (state, { consent }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.addOne(consent, state.consents)
    };
  })
);

export const { selectAll } = consentsAdapter.getSelectors();
