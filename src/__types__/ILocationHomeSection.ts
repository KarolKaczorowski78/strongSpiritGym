import { ESectionIds } from './ESectionsIds';
import { ECountries } from './ECountries';
import IContent from './IContent';

export default interface ILocationHomeSection {
  country: ECountries,
  overview: IContent,
  countryName: IContent,
  id: ESectionIds,
}