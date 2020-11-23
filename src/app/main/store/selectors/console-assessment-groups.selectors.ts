import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConsoleState } from '../../../../ngrx/reducers';
import { MainState } from '../reducers';
import * as fromGroups from '../reducers/consents.reducer';

const featureState = createFeatureSelector<ConsoleState>('console');

export const selectAllGroups = createSelector(featureState, state => fromGroups.selectAll(state.assessments.groups.assessmentGroups));

