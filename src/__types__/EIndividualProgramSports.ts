import IContent from "./IContent";

export enum EIndividualProgramSports {
  MMA = 'MMA',
  POWERLIFTING = 'POWERLIFTING',
  STAND_UP = 'STAND_UP',
  GROUND_GAME = 'GROUND_GAME',
}

export const individualProgramSports: IContent[] = [
  {
    eng: 'MMA',
    pl: 'MMA',
  },
  {
    eng: 'Powerlifting',
    pl: 'Powerlifting',
  },
  {
    eng: 'Stand up',
    pl: 'Stójka',
  },
  {
    eng: 'Ground game',
    pl: 'Parter',
  }
]