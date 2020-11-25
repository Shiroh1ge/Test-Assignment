import { ConsentGrant } from '../enums/consent-grant.enum';

export interface ConsentModel {
  id?: number;
  name: string;
  email: string;
  consentGrants: ConsentGrant[];
}
