import { ESectionIds } from '../__types__/ESectionsIds';
import IContent from '../__types__/IContent';
import IProgramSection from '../__types__/IProgramSection';
import { loremIpsum, loremIpsumLong } from './loremIpsum';
import MmaImg from '../img/individualPrograms/mma.jpg';
import GroundGameImg from '../img/individualPrograms/groundGame.jpg';
import StandUpImg from '../img/individualPrograms/standUp.jpg';
import PowerliftingImg from '../img/individualPrograms/powerlifting.jpg';
import { EChildRoutes, EMainRoutes } from '../__types__/ERoutes';

export const headling = {
  firstLine: {
    eng: 'choose a program',
    pl: 'wybierz program',
  },
  lastLine: {
    eng: 'develop',
    pl: 'popraw',
  }
}

export const p: IContent = {
  eng: loremIpsum,
  pl: loremIpsum,
}

export const words: IContent[] = [
  {
    eng: 'strength',
    pl: 'sile',
  },
  {
    eng: 'focus',
    pl: 'skupienie',
  },
  {
    eng: 'condition',
    pl: 'kondycje',
  },
  {
    eng: 'flexibility',
    pl: 'gibkość',
  },
  {
    eng: 'speed',
    pl: 'szybkość',
  },
  {
    eng: 'power',
    pl: 'moc',
  }
]

export const Sections: IProgramSection[] = [
  {
    id: ESectionIds.INDIVIDUAL_PROGRAMS_MMA,
    img: MmaImg,
    name: {
      eng: 'MMA',
      pl: 'MMA',
    },
    linkPath: EMainRoutes.INDIVIDUAL_PROGRAMS,
    strengths: [.6, .7, .7, .9],
  },
  {
    id: ESectionIds.INDIVIDUAL_PROGRAMS_POWERLIFTING,
    img: PowerliftingImg,
    name: {
      eng: 'Powerlifting',
      pl: 'Powerlifting',
    },
    linkPath: EMainRoutes.INDIVIDUAL_PROGRAMS,
    strengths: [.9, .6, .4, .6],
  },
  {
    id: ESectionIds.INDIVIDUAL_PROGRAMS_STAND_UP,
    img: StandUpImg,
    name: {
      eng: 'Stand up',
      pl: 'Walka w stójce',
    },
    linkPath: EMainRoutes.INDIVIDUAL_PROGRAMS,
    strengths: [.4, .7, .9, .9],
  },
  {
    id: ESectionIds.INDIVIDUAL_PROGRAMS_GROUND_GAME,
    img: GroundGameImg,
    name: {
      eng: 'Ground game',
      pl: 'Walka w parterze',
    },
    strengths: [.7, .7, .5, .6],
    linkPath: EMainRoutes.INDIVIDUAL_PROGRAMS,
  }
]

export const AboutSection = {
  headling: {
    eng: 'how does it work',
    pl: 'jak to działa',
  },
  p: {
    eng: loremIpsumLong,
    pl: loremIpsumLong,
  },
  button: {
    eng: 'Find a program for you',
    pl: 'Znajdz program dla siebie'
  }
}