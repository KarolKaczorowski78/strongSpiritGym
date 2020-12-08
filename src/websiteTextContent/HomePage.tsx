import IOffer from '../__types__/IOffer';
import { EChildRoutes } from '../__types__/ERoutes';
import IStatisticsCounter from '../__types__/IStatisticCounter';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

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
      pl: 'Zróżnicowane treningi sportów walki',
    },
    p: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
    imgSrc: '',
    linkContent: {
      eng: 'Lookup schedule',
      pl: 'Zobacz grafik',
    },
    linkPath: EChildRoutes.SCHEDULE,
  },
  {
    headling: {
      eng: 'Strength and conditioning preparation',
      pl: 'Przygotowanie fizyczne pod okiem najlepszych',
    },
    p: {
      eng: loremIpsum,
      pl: loremIpsum,
    },
    imgSrc: '',
    linkContent: {
      eng: 'Lookup classes',
      pl: 'Zobacz grupy',
    },
    linkPath: EChildRoutes.CLASSES,
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
    imgSrc: '',
    linkContent: {
      eng: 'Lookup offer',
      pl: 'Zobacz ofertę',
    },
    linkPath: EChildRoutes.SCHEDULE,
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