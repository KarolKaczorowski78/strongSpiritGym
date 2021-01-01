import ILocationHomeSection from '../__types__/ILocationHomeSection';
import { ESectionIds } from '../__types__/ESectionsIds';
import { loremIpsum } from './loremIpsum';
import { ECountries } from '../__types__/ECountries';

export const Locations: ILocationHomeSection[] = [
  {
    id: ESectionIds.LOCATION_PL,
    country: ECountries.POLAND,
    countryName: {
      eng: 'poland',
      pl: 'polska',
    },
    overview: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
  },
  {
    id: ESectionIds.LOCATION_USA,
    country: ECountries.UK,
    countryName: {
      eng: 'uk',
      pl: 'uk',
    },
    overview: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
  },
  {
    id: ESectionIds.LOCATION_USA,
    country: ECountries.USA,
    countryName: {
      eng: 'Usa',
      pl: 'Usa',
    },
    overview: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
  },
]