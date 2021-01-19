import  { ITrainingPerkSectionLanguages } from '../__types__/ITrainingPerkSection';
import { EChildRoutes } from '../__types__/ERoutes';
import { ESectionIds } from '../__types__/ESectionsIds';
import TimerImg1 from '../img/trainingPerks/timer.png';
import TimerImg2 from '../img/trainingPerks/timer2.png';
import CalcImg1 from '../img/trainingPerks/calculator.png';
import CalcImg2 from '../img/trainingPerks/calculator2.png';
import { loremIpsumLong }  from './loremIpsum';

export const Sections: ITrainingPerkSectionLanguages[] = [
  {
    headling: {
      eng: 'Train with an accuarcy of second',
      pl: 'Sprecyzuj swoj trening co do sekundy ',
    },
    p: {
      eng: loremIpsumLong,
      pl: loremIpsumLong,
    },
    images: [TimerImg1, TimerImg2],
    route: EChildRoutes.TIMER,
    id: ESectionIds.TRAINNG_PERKS_TIMER,
    link: {
      eng: 'Train now',
      pl: 'Trenuj teraz',
    }
  },
  {
    headling: {
      eng: 'Adjust Your diet to training',
      pl: 'Dostosuj swoja diete do treningu ',
    },
    p: {
      eng: loremIpsumLong,
      pl: loremIpsumLong,
    },
    images: [CalcImg1, CalcImg2],
    route: EChildRoutes.KCAL_CALC,
    id: ESectionIds.TRAINING_PERKS_CALCULATOR,
    link: {
      eng: 'Calculate demand',
      pl: 'Oblicz zapotrzebowanie',
    }
  }
]