import IContent from '../__types__/IContent';
import { loremIpsum } from './loremIpsum';

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