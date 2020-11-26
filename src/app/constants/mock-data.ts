import { ConsentGrant } from '../enums/consent-grant.enum';
import { ConsentModel } from '../models/consent.model';
import { NumberUtilities } from '../utilities/number.utilities';

export const mockConsents: ConsentModel[] = [
  {
    email: 'asd@asd.asd',
    name: 'Borislav Doychinov',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS, ConsentGrant.NEWSLETTER],
    createdAt: new Date()
  },
  {
    email: 'seasweb@aol.com',
    name: 'Kiro Skalata',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.NEWSLETTER],
    createdAt: new Date()
  },
  {
    email: 'munge@verizon.net',
    name: 'John Doe',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.TARGETED_ADS],
    createdAt: new Date()
  },
  {
    email: 'noodles@yahoo.ca',
    name: 'Harlee Todd',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS, ConsentGrant.NEWSLETTER],
    createdAt: new Date()
  },
  {
    email: 'jsnover@optonline.net',
    name: 'Charly Emerson',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS, ConsentGrant.NEWSLETTER, ConsentGrant.TARGETED_ADS],
    createdAt: new Date()
  },
  {
    email: 'malvar@verizon.net',
    name: 'Harry Briggs',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS],
    createdAt: new Date()
  },

];
