import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConsentsStateModel } from '../models/consents-state.model';
import * as fromReducer from '../reducers/consents.reducer';

const featureState = createFeatureSelector<ConsentsStateModel>('consents');
const selectConsents = createSelector(featureState, state => {
  return state.consents;
});

export class ConsentsSelectors {
  public static selectAllConsents = createSelector(selectConsents, fromReducer.selectAll);
}


