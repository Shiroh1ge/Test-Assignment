import { EntityState } from '@ngrx/entity';
import { AssessmentGroupModel } from '../../../../../../shared/models/assessment-group.model';

export interface ConsentsStateModel {
  consents: EntityState<AssessmentGroupModel>;
}
