import { EntityState } from '@ngrx/entity';
import { ConsentModel } from '../../../../models/consent.model';

export interface ConsentsStateModel {
  consents: EntityState<ConsentModel>;
}
