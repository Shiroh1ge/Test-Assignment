import { combineReducers } from '@ngrx/store';
import { ConsentsStateModel } from '../models/consents-state.model';
import { consentsReducer } from './consents.reducer';

export interface MainState {
  consents: ConsentsStateModel;
}

export const mainReducer = combineReducers<MainState>({
  consents: consentsReducer
});
