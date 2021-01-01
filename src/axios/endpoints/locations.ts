import { get } from '../config';
import { ECountries } from '../../__types__/ECountries';
import IGym from '../../__types__/IGym';
import { AxiosResponse } from 'axios';

export const Locations = {
  getAll: (): Promise<AxiosResponse<IGym[]>> => get('/locations'),
  getByCountry: (country: ECountries): Promise<AxiosResponse<IGym[]>> => get(`/locations/${country}`),
  getByCityInCountry: (city: string, country: ECountries): Promise<AxiosResponse<IGym[]>> => get(`/locations/${country}?city=${city}`),
}