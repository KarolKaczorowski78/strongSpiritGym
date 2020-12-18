import { EGroupTrainings } from "./EGroupTrainings";

export type TScheduleDay = EGroupTrainings | null;
export type TScheduleRow = [
                              TScheduleDay, TScheduleDay, TScheduleDay, TScheduleDay, 
                              TScheduleDay, TScheduleDay, TScheduleDay,
                            ]

export type TSchedule = [
  TScheduleRow, TScheduleRow, TScheduleRow, TScheduleRow,
  TScheduleRow, TScheduleRow, TScheduleRow, TScheduleRow,
]