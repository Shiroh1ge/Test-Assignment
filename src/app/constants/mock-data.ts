import { ConsentGrant } from '../enums/consent-grant.enum';
import { ConsentModel } from '../models/consent.model';
import { NumberUtilities } from '../utilities/number.utilities';

export const mockConsents: ConsentModel[] = [
  {
    email: 'asd@asd.asd',
    name: 'Borislav Doychinov',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS, ConsentGrant.NEWSLETTER]
  },
  {
    email: 'seasweb@aol.com',
    name: 'Kiro Skalata',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.NEWSLETTER]
  },
  {
    email: 'munge@verizon.net',
    name: 'John Doe',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.TARGETED_ADS]
  },
  {
    email: 'noodles@yahoo.ca',
    name: 'Harlee Todd',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS, ConsentGrant.NEWSLETTER]
  },
  {
    email: 'jsnover@optonline.net',
    name: 'Charly Emerson',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS, ConsentGrant.NEWSLETTER, ConsentGrant.TARGETED_ADS]
  },
  {
    email: 'malvar@verizon.net',
    name: 'Harry Briggs',
    id: NumberUtilities.getRandomId(),
    consentGrants: [ConsentGrant.ANONYMOUS_STATISTICS]
  }
];
