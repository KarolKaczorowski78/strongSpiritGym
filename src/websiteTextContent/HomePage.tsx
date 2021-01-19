import IOffer from '../__types__/IOffer';
import { EChildRoutes, EMainRoutes } from '../__types__/ERoutes';
import IStatisticsCounter from '../__types__/IStatisticCounter';
import MartialArtsOfferImg from '../img/homePage/martialArtsOffer.jpg';
import StrengthAndConditioningImg from '../img/homePage/strengthOffer.jpg';
import IndividualProgramsImg from '../img/homePage/individualOffer.jpg';
import { loremIpsum } from './loremIpsum';

export const HomeSection = {
  headling: {
    firstLine: {
      eng: 'Unleash Your',
      pl: 'Odnajdź w sobie',
    },
    secondLine: {
      eng: 'fighting spirit',
      pl: 'duszę wojownika',
    }
  }
};

export const Offers: IOffer[] = [
  {
    headling: {
      eng: 'Full-stack martial arts training',
      pl: 'Treningi sportów walki',
    },
    p: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
    imgSrc: MartialArtsOfferImg,
    linkContent: {
      eng: 'Lookup schedule',
      pl: 'Zobacz grafik',
    },
    linkPath: EChildRoutes.SCHEDULE,
  },
  {
    headling: {
      eng: 'Strength and conditioning preparation',
      pl: 'Przygotowanie fizyczne',
    },
    p: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
    imgSrc: StrengthAndConditioningImg,
    linkContent: {
      eng: 'Lookup classes',
      pl: 'Zobacz grupy',
    },
    linkPath: EChildRoutes.SCHEDULE,
  },
  {
    headling: {
      eng: 'Individual training programs',
      pl: 'Indywidualne programy treningowe',
    },
    p: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
    imgSrc: IndividualProgramsImg,
    linkContent: {
      eng: 'Lookup offer',
      pl: 'Zobacz ofertę',
    },
    linkPath: EMainRoutes.INDIVIDUAL_PROGRAMS,
  },
];

export const StatisticsCounter: IStatisticsCounter[] = [
  {
    count: 100000,
    eng: 'Satisfied customers',
    pl: 'Zadowolonych klientów',
  },
  {
    count: 100,
    eng: 'Educated coaches',
    pl: 'Wyedukowanych trenerów',
  },
  {
    count: 50,
    eng: 'Gyms around the world',
    pl: 'Placówek na całym świecie',
  }
]