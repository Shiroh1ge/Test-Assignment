import { createFeatureSelector } from '@ngrx/store';
import { ConsoleState } from '../../../../ngrx/reducers';

const featureState = createFeatureSelector<ConsoleState>('console');

