import { TSchedule } from './ScheduleTypes';

export default interface ISchedule {
  id: number,
  locationId: number,
  schedule: TSchedule,
}