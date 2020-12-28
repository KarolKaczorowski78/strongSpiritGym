import { ESectionIds } from '../__types__/ESectionsIds';
import ILocationSection from '../__types__/ILocationSection';
import LondonImg from '../img/locations/london.jpg';
import NewYorkImg from '../img/locations/newYork.jpg';
import CracowImg from '../img/locations/warsaw.jpg';
import { EChildRoutes } from '../__types__/ERoutes';

export const Home = {
  headling: {
    eng: 'Find a gym in your city',
    pl: 'Znajdz klub w swoim miescie',
  },
  input: {
    eng: 'Your city',
    pl: 'Twoje miasto'
  },
  button: {
    eng: 'List of countries',
    pl: 'Lista panstw',
  }
}

export const LocationsContents: ILocationSection[] = [
  {
    id: ESectionIds.LOCATIONS_PL,
    countryName: {
      eng: 'Poland',
      pl: 'Polska',
    },
    linkPath: EChildRoutes.POLAND,
    description: {
      eng: 'Space for description',
      pl: 'Miejsce na opis',
    },
    img: CracowImg,
  },
  {
    id: ESectionIds.LOCATIONS_USA,
    countryName: {
      eng: 'USA',
      pl: 'USA',
    },
    linkPath: EChildRoutes.USA,
    description: {
      eng: 'Space for description',
      pl: 'Miejsce na opis',
    },
    img: NewYorkImg,
  },
  {
    id: ESectionIds.LOCATIONS_BR,
    countryName: {
      eng: 'UK',
      pl: 'UK',
    },
    linkPath: EChildRoutes.UK,
    description: {
      eng: 'Space for description',
      pl: 'Miejsce na opis',
    },
    img: LondonImg,
  },
];