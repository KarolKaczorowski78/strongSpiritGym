import { EGroupTrainings } from './__types__/EGroupTrainings';
import { TSchedule } from './__types__/ScheduleTypes';

const { MMA, BJJ, BOXING, CROSSFIT, STRETCHING } = EGroupTrainings;

export const exampleSchedule: TSchedule = [
  [ MMA, BJJ, BOXING, CROSSFIT, STRETCHING, MMA, BOXING ],
  [ BOXING, null, MMA, MMA, MMA, BJJ, BJJ ],
  [ null, null, BOXING, STRETCHING, BJJ, BJJ, CROSSFIT ],
  [ BOXING, MMA, MMA, BJJ, BJJ, CROSSFIT, CROSSFIT ],
  [ MMA, MMA, null, BJJ, BOXING, null, BOXING ],
  [ MMA, null, BJJ, MMA, STRETCHING, MMA, BOXING ],
  [ MMA, MMA, BJJ, BJJ, BJJ, STRETCHING, BOXING ],
  [ MMA, BOXING, null, null, null, BOXING, BOXING ],
]