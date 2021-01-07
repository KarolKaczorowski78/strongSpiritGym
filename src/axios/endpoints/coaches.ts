import { get } from '../config';

export const Coaches = {
  getAll: () => get('/coaches'),
  getAllByLocation: (countryId: number) => get(`/coaches/${countryId}`),
}