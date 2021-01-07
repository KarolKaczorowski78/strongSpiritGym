import { Dispatch, SetStateAction } from 'react';
import { ECountries } from './ECountries';
import IGym from './IGym';

export default interface ILocationContext {
  gymId: number,
  country: ECountries,
  setGymId: Dispatch<SetStateAction<number>>,
  setCountry: Dispatch<SetStateAction<ECountries>>,
  gyms: IGym[],
  setGyms: Dispatch<SetStateAction<IGym[]>>,
}