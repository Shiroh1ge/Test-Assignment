import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, tap } from 'rxjs/operators';
import { ConsoleUsersState } from '../../../console-users/ngrx/reducers';
import { ConsoleConsentsService } from '../../services/console-assessment-groups.service';
import {
  createAssessmentGroupRequest,
  createAssessmentGroupSuccess,
  fetchConsents,
  fetchConsentsSuccess,
} from '../actions/consents.actions';
import { fetchAssessmentsByGroupsRequest } from '../actions/console-assessments.actions';

@Injectable()
export class ConsentsEffects {
  fetchConsentsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchConsentsRequest),
      mergeMap(action =>
        this.consoleConsentsService
          .getGroups()
          .pipe(
            tap(res => {
              const groupIds = res.map(group => group.id);
              this.store.dispatch(fetchAssessmentsByGroupsRequest({ groupIds }));
            }),
            map(res => fetchConsentsSuccess({ assessmentGroups: res }))
          )
      )
    )
  );

  createAssessmentGroupRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAssessmentGroupRequest),
      mergeMap(({ name }) =>
        this.consoleConsentsService
          .createAssessmentGroup({ name })
          .pipe(map(result => createAssessmentGroupSuccess({ group: result })))
      )
    )
  );

  updateAssessmentGroupRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAssessmentGroupRequest),
      mergeMap(({ group }) =>
        this.consoleConsentsService
          .updateAssessmentGroup(group)
          .pipe(map(result => updateAssessmentGroupSuccess({ group: result })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private consoleConsentsService: ConsoleConsentsService,
    private store: Store<ConsoleUsersState>
  ) {
  }
}
