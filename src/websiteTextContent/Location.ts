import ILocationHomeSection from '../__types__/ILocationHomeSection';
import { ESectionIds } from '../__types__/ESectionsIds';

export const Locations: ILocationHomeSection[] = [
  {
    id: ESectionIds.LOCATION_PL,
    countryName: {
      eng: 'poland',
      pl: 'polska',
    },
    overview: {
      eng: 'Country overview',
      pl: 'Opis panstwa',
    },
  },
  {
    id: ESectionIds.LOCATION_USA,
    countryName: {
      eng: 'uk',
      pl: 'uk',
    },
    overview: {
      eng: 'Country overview',
      pl: 'Opis panstwa',
    },
  },
  {
    id: ESectionIds.LOCATION_PL,
    countryName: {
      eng: 'Usa',
      pl: 'Usa',
    },
    overview: {
      eng: 'Country overview',
      pl: 'Opis panstwa',
    },
  },
]