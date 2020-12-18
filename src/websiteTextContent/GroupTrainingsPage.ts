import IClassSection from '../__types__/IClassSection';
import { ESectionIds } from '../__types__/ESectionsIds';
import ClassMMA from '../img/groupTrainingsPage/class1.jpg';
import ClassBJJ from '../img/groupTrainingsPage/class2.jpg';
import ClassBoxing from '../img/groupTrainingsPage/class3.jpg';
import ClassCrossfit from '../img/groupTrainingsPage/class4.jpg';
import ScheduleImageBig from '../img/groupTrainingsPage/schedule1.jpg';
import ScheduleImageSmall from '../img/groupTrainingsPage/schedule2.jpg';
// import { loremIpsum } from './loremIpsum';

export const HomeSection = {
  headling: {
    eng: 'Join our team',
    pl: 'Zostan jednym z nas'
  },
  p: {
    eng: 'And develop mental and physical toughness',
    pl: 'I rozwin w sobie mentalna i fizyczną siłe',
  },
  button: {
    eng: 'Lookup offer',
    pl: 'Zobacz oferte',
  },
}

export const ClassesSection: IClassSection[] = [
  {
    id: ESectionIds.GROUP_WORKOUTS_MMA,
    img: ClassMMA,
    word: 'mma',
    headling: {
      eng: 'Mixed martial arts',
      pl: 'Mieszane sztuki walki',
    },
    p: {
      eng: 'All martial arts combined into one, structured program.',
      pl: 'Wszystkie sztuki walki wlaczone w jeden, uporzadkowany program.',
    },
    strengths: [
      {
        eng: 'Strength',
        pl: 'Siła',
      },
      {
        eng: 'Endurance',
        pl: 'Wytrzymalosc ',
      },
      {
        eng: 'Suppleness',
        pl: 'Gibkosc',
      }
    ]
  },
  {
    id: ESectionIds.GROUP_WORKOUTS_BJJ,
    img: ClassBJJ,
    word: 'bjj',
    headling: {
      eng: 'Brazilian Jiu Jitsu',
      pl: 'Brazylijskie Jiu Jitsu',
    },
    p: {
      eng: 'Master the art of the fight on the ground.',
      pl: 'Stan sie mistrzem walki na ziemi.',
    },
    strengths: [
      {
        eng: 'Strength',
        pl: 'Endurance',
      },
      {
        eng: 'Endurance',
        pl: 'Wytrzymalosc',
      },
      {
        eng: 'Suppleness',
        pl: 'Gibkosc',
      }
    ]
  },
  {
    id: ESectionIds.GROUP_WORKOUTS_BOXING,
    img: ClassBoxing,
    word: 'Box',
    headling: {
      eng: 'Boxing',
      pl: 'Boks',
    },
    p: {
      eng: 'Transform your fists into deadly weapons.',
      pl: 'Zamien swoje piesci na niebezpieczne bronie.',
    },
    strengths: [
      {
        eng: 'Reflex',
        pl: 'Refleks',
      },
      {
        eng: 'Conditioning',
        pl: 'Kondycja',
      },
      {
        eng: 'Dynamic strength',
        pl: 'Siła dynamiczna',
      }
    ]
  },
  {
    id: ESectionIds.GROUP_WORKOUTS_CROSSFIT,
    img: ClassCrossfit,
    word: 'Fit',
    headling: {
      eng: 'Crossfit',
      pl: 'Crossfit',
    },
    p: {
      eng: 'Increase Your strength and conditioning.',
      pl: 'Popraw swoją siłe, kondycje i wytrzymalosc.',
    },
    strengths: [
      {
        eng: 'Strength',
        pl: 'Sila',
      },
      {
        eng: 'Conditioning',
        pl: 'Kondycja',
      },
      {
        eng: 'Mobility',
        pl: 'Mobilnosc',
      }
    ]
  },
]

export const SeeScheduleSection = {
  headling: {
    eng: 'Do not hesitate!',
    pl: 'Nie czekaj',
  },
  p: {
    eng: 'See the schedule and find something for Yourself!',
    pl: 'Rzuc okiem na harmonogram i znajdz cos dla siebie!',
  },
  linkContent: {
    eng: 'Schedule',
    pl: 'Harmonogram',
  },
  imgSmall: ScheduleImageSmall,
  imgBig: ScheduleImageBig,
}