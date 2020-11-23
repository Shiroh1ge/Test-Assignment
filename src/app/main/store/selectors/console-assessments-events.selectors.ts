import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from 'src/app/root-store/router-store/router.selectors';
import { EventFilterType, EventResourceType } from '../../../../../../core/models/event';
import { ConsoleState } from '../../../../ngrx/reducers';
import { selectAllPersonas } from '../../../console-admin/ngrx/model/events.state';
import { assessmentsEventsAdapter } from '../reducers/console-assessments-events.reducer';

const consoleFeature = createFeatureSelector<ConsoleState>('console');

const selectConsoleEventState = createSelector(
  consoleFeature,
  state => state.events
);

export const selectEvents = createSelector(
  selectConsoleEventState,
  state => state.events
);
export const selectEventFilterType = createSelector(
  selectConsoleEventState,
  state => state.eventFilterType
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = assessmentsEventsAdapter.getSelectors(selectEvents);

export const selectSelectedEvent = createSelector(
  selectEntities,
  fromRouter.selectQueryParams,
  (eventsEntities, queryParams) => {
    return eventsEntities[queryParams.event];
  }
);

export const selectEventsUI = createSelector(
  selectConsoleEventState,
  state => state.ui.events
);

export const selectEventDetails = createSelector(
  selectConsoleEventState,
  state => state.eventDetails
);

export const selectEventDetailsUI = createSelector(
  selectConsoleEventState,
  state => state.ui.eventDetails
);

export const selectCreateUI = createSelector(
  selectConsoleEventState,
  state => state.ui.createEvent
);

export const selectParticipants = createSelector(
  selectConsoleEventState,
  state => state.participants
);

export const selectEventEntities = selectEntities;
export const selectAllEvents = createSelector(
  selectAll,
  selectEventFilterType,
  (events, filterType) => {
      let result = events;

      if (filterType === EventFilterType.Period) {
        result = events.filter(event => !!event.eventPeriods.length);
      }

      if (filterType === EventFilterType.Assessment) {
        result = events.filter(event => event.eventResources.find(resource => resource.resourceType === EventResourceType.ASSESSMENT))
      }

      return result;
  }

);

export const selectCustomFilters = createSelector(
  selectConsoleEventState,
  state => state.ui.customFilters
);

export const getPersonas = createSelector(
  selectConsoleEventState,
  state => state.ui.personasFilter
);
export const selectPersonas = createSelector(getPersonas, selectAllPersonas);
