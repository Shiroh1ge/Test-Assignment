import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as moment from 'moment';
import { AssessmentModel } from '../../../../../../shared/models/assessment.model';
import { ConsoleState } from '../../../../ngrx/reducers';
import { selectSubjectEntities } from '../../../console-users/ngrx/selectors/console-staff.selectors';
import { AssessmentsSortType } from '../../constants/assessments-sort-type.enum';
import * as fromAssessments from '../reducers/console-assessments.reducer';
import { selectAllGroups } from './console-assessment-groups.selectors';

const featureState = createFeatureSelector<ConsoleState>('console');

export const selectAllAssessments = createSelector(featureState, state => fromAssessments.selectAll(state.assessments.assessments.assessments));
export const selectAssessmentsSortType = createSelector(featureState, state => state.assessments.assessments.sortType);
export const selectAssessmentsSortDirection = createSelector(featureState, state => state.assessments.assessments.sortDirection);
export const selectSortedAssessments = createSelector(selectAllAssessments, selectAssessmentsSortType, selectAssessmentsSortDirection, selectSubjectEntities,
  (assessments, sortType, sortDirection, subjectsMap) => {
    let sortedAssessments = [...assessments];

    switch (sortType) {
      case AssessmentsSortType.TITLE:
        sortedAssessments = sortedAssessments
          .sort((a, b) => a.title.localeCompare(b.title));
        break;

      case AssessmentsSortType.SUBJECT:
        sortedAssessments = sortedAssessments
          .sort((a, b) => {
            if (!subjectsMap[a.subjectId]) {
              return 1;
            }

            if (!subjectsMap[b.subjectId]) {
              return -1;
            }

            return subjectsMap[a.subjectId]?.title.localeCompare(subjectsMap[b.subjectId]?.title);
          });

        break;

      case AssessmentsSortType.DATE:
        sortedAssessments = sortedAssessments
          .sort((a, b) => {
            if (!a.date) {
              return 1;
            }

            if (!b.date) {
              return -1;
            }

            return new Date(a.date) > new Date(b.date) ? 1 : -1;
          });

        break;

      case AssessmentsSortType.TIME:
        sortedAssessments = sortedAssessments
          .sort((a, b) => {
            if (!a.time) {
              return 1;
            }

            if (!b.time) {
              return -1;
            }

            const moment1 = moment.duration(a.time).asMinutes();
            const moment2 = moment.duration(b.time).asMinutes();

            return moment1 > moment2 ? -1 : 1;
          });

        break;

      case AssessmentsSortType.DESCRIPTION:
        sortedAssessments = sortedAssessments
          .sort((a, b) => {
            if (!a.description) {
              return 1;
            }

            if (!b.description) {
              return -1;
            }

            return a.description.localeCompare(b.description);
          });

        break;
    }

    if (sortDirection === 'desc') {
      sortedAssessments.reverse();
    }
    return sortedAssessments;
  }
);
export const selectAllAssessmentTemplates = createSelector(featureState, state => fromAssessments.selectAllTemplates(state.assessments.assessments.assessmentTemplates));
export const selectAssessmentsUI = createSelector(
  featureState,
  state => state.assessments.assessments.ui.assessments
);
export const selectAssessmentsEnabledColumns = createSelector(featureState, state => state.assessments.assessments.enabledColumns);
export const selectAssessmentsColumnFields = createSelector(featureState, state => state.assessments.assessments.columnFields);

export const selectAllAssessmentGroups = createSelector(
  selectSortedAssessments, selectAllGroups, selectAssessmentsSortType, selectAssessmentsSortDirection, selectSubjectEntities,
  (assessments, groups, sortType, sortDirection, subjectsMap) => {
    const groupAssessmentsMap = assessments.reduce((result, assessment) => {
      result[assessment.groupId] = result[assessment.groupId] || [];
      result[assessment.groupId].push(assessment);

      return result;
    }, {}) as { [groupId: string]: AssessmentModel[] };

    return groups
      // .filter(group => group.id === '96428f19-4bc0-4fcb-b6b9-a7f4f3e30b82')
      .map(group => {
        let sortedAssessments = groupAssessmentsMap[group.id] || [];

        // switch (sortType) {
        //   case AssessmentsSortType.TITLE:
        //     sortedAssessments = sortedAssessments
        //       .sort((a, b) => a.title.localeCompare(b.title));
        //     break;
        //
        //   case AssessmentsSortType.SUBJECT:
        //     sortedAssessments = sortedAssessments
        //       .sort((a, b) => {
        //         if (!subjectsMap[a.subjectId]) {
        //           return 1;
        //         }
        //
        //         if (!subjectsMap[b.subjectId]) {
        //           return -1;
        //         }
        //
        //         return subjectsMap[a.subjectId]?.title.localeCompare(subjectsMap[b.subjectId]?.title);
        //       });
        //
        //     break;
        //
        //   case AssessmentsSortType.DATE:
        //     sortedAssessments = sortedAssessments
        //       .sort((a, b) => {
        //         if (!a.date) {
        //           return 1;
        //         }
        //
        //         if (!b.date) {
        //           return -1;
        //         }
        //
        //         return new Date(a.date) > new Date(b.date) ? 1 : -1;
        //       });
        //
        //     break;
        //
        //   case AssessmentsSortType.TIME:
        //     sortedAssessments = sortedAssessments
        //       .sort((a, b) => {
        //         if (!a.time) {
        //           return 1;
        //         }
        //
        //         if (!b.time) {
        //           return -1;
        //         }
        //
        //         const moment1 = moment.duration(a.time).asMinutes();
        //         const moment2 = moment.duration(b.time).asMinutes();
        //
        //         return moment1 > moment2 ? -1 : 1;
        //       });
        //
        //     break;
        //
        //   case AssessmentsSortType.DESCRIPTION:
        //     sortedAssessments = sortedAssessments
        //       .sort((a, b) => {
        //         if (!a.description) {
        //           return 1;
        //         }
        //
        //         if (!b.description) {
        //           return -1;
        //         }
        //
        //         return a.description.localeCompare(b.description);
        //       });
        //
        //     break;
        // }
        //
        //
        // if (sortDirection === 'desc') {
        //   sortedAssessments.reverse();
        // }

        return {
          ...group,
          assessments: sortedAssessments
        };
      });
  });

