import { get } from '../config';
import ISchedule from '../../__types__/ISchedule';
import { AxiosResponse } from 'axios';

export const Schedule = {
  getAll: (): Promise<AxiosResponse<ISchedule[]>> => get('/schedule'),
  getByLocationId: (locationId: number): Promise<AxiosResponse<ISchedule>> => get(`/schedule/${locationId}`),
}