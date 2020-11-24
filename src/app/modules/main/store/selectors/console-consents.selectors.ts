import { createFeatureSelector, createSelector } from '@ngrx/store';

const featureState = createFeatureSelector<ConsoleState>('console');

export const selectAllConsents = createSelector(featureState, state => fromAssessments.selectAll(state.assessments.assessments.assessments));


