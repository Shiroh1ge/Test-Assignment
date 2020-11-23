import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ConsentModel } from '../../../models/consent.model';
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
  on(ConsentsActions.createAssessmentGroupRequest, (state, { consents }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.setAll(consents, state.consents)
    };
  }),
  on(createAssessmentGroupSuccess, (state, { group }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.addOne(group, state.consents)
    };
  }),
  on(updateAssessmentGroupSuccess, (state, { group }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.updateOne({ id: group.id, changes: group }, state.consents)
    };
  }),
  on(deleteAssessmentGroupSuccess, (state, { id }): ConsentsStateModel => {
    return {
      ...state,
      consents: consentsAdapter.removeOne(id, state.consents)
    };
  })
);

export const { selectAll } = consentsAdapter.getSelectors();
