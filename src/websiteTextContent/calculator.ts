import { loremIpsumLong } from './loremIpsum';
import IContent from '../__types__/IContent';
import { RegisterOptions } from 'react-hook-form';

interface IFormInputData {
  name: string,
  propName: IContent,
  placeholder: IContent,
  error: IContent,
  reference: RegisterOptions,
}

interface ISelect {
  name: string,
  label: IContent
  options: { eng: string, pl: string, value: string | number }[]
}

export const Main = {
  h1: {
    eng: 'Calculate your daily caloric demand',
    pl: 'Oblicz swoje dzienne zapotrzebowanie kaloryczne',
  },
  p: {
    eng: loremIpsumLong,
    pl: loremIpsumLong,
  },
  h2: {
    eng: 'Your daily caloric demand is: ',
    pl: 'Twoje dzienne zapotrzebowanie kaloryczne: '
  },
}

export const FormElements: IFormInputData[] = [
  {
    name: 'weight',
    propName: {
      eng: 'Weight',
      pl: 'Waga',
    },
    placeholder: {
      eng: 'In kilograms',
      pl: 'W kilogramach',
    },
    error: {
      eng: 'Provide a value greater than 0',
      pl: 'Podaj liczbe większą od 0'
    },
    reference: { validate: (value: string) => parseInt(value) > 0 },
  },
  {
    name: 'height',
    propName: {
      eng: 'Height',
      pl: 'Wzrost',
    },
    placeholder: {
      eng: 'In centimeters',
      pl: 'W centymetrach',
    },
    error: {
      eng: 'Provide a value greater than 0',
      pl: 'Podaj liczbe większą od 0'
    },
    reference: { validate: (value: string) => parseInt(value) > 0 },
  },
  {
    name: 'age',
    propName: {
      eng: 'Age',
      pl: 'Wiek',
    },
    placeholder: {
      eng: 'From 1 to 100',
      pl: 'Od 1 do 100',
    },
    error: {
      eng: 'Provide a value between 1 and 100',
      pl: 'Podaj liczbe pomiedzy 1 a 100'
    },
    reference: { validate: (value: string) => parseInt(value) >= 1 && parseInt(value) <= 100 },
  }
]

export const Selects: ISelect[] = [
  {
    name: 'gender',
    label: {
      eng: 'Gender',
      pl: 'Płec',
    },
    options: [
      {
        value: 'MEN',
        eng: 'Men',
        pl: 'Mężczyzna',
      },
      {
        value: 'WOMEN',
        eng: 'Women',
        pl: 'Kobieta',
      },  
    ],
  },
  {
    name: 'palFactor',
    label: {
      eng: 'Activity',
      pl: 'Aktywnosc',
    },
    options: [
      {
        value: 1.4,
        eng: 'Sedentary lifestyle',
        pl: 'Siedzący tryb życia',
      },
      {
        value: 1.7,
        eng: 'Pretty active',
        pl: 'Całkiem aktywny/a',
      },
      {
        value: 2.0,
        eng: 'Very active',
        pl: 'Bardzo aktywny/a',
      },
      {
        value: 2.4,
        eng: 'Athelte',
        pl: 'Sportowiec',
      }
    ]
  }
]
