import { createFeatureSelector } from '@ngrx/store';
import { MainState } from '../reducers';
import * as fromReducer from '../reducers/consents.reducer';

const featureState = createFeatureSelector<MainState>('consents');

export class ConsentsSelectors {
  public static selectAllConsents = fromReducer.selectAll;
}


