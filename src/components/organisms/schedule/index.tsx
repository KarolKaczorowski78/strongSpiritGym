import React, { FC, useContext, useEffect, useState } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Table, TableContainer } from './styles';
import { WeekDays } from '../../../websiteTextContent/Schedule';
import { EGroupTrainingsHours } from '../../../__types__/EGroupTrainingsHours';
import BookClassWorkoutButton from '../../molecues/BookClassWorkoutButton';
import { Schedule as ScheduleAxios } from '../../../axios/endpoints/schedule';
import { TSchedule } from '../../../__types__/ScheduleTypes';

const isBookable = (hourIndex: number, dayIndex: number) => {
  const today = new Date();
  const day = today.getDay();
  const hour = today.getHours();
  const hoursValues = Object.values(EGroupTrainingsHours) as string[];
  const hourOfWorkout = parseInt(hoursValues[hourIndex].slice(0, hoursValues.indexOf(':')))

  if (day < dayIndex + 1) {
    return true;
  } else if (day === dayIndex + 1 && hourOfWorkout > hour) {
    return true
  }
  return false;
}

const Schedule: FC<{ gymId: number }> = ({ gymId }) => {

  const [schedule, setSchedule] = useState<TSchedule | null>(null);
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  useEffect(() => {
    (async () => {
      const data = await ScheduleAxios.getByLocationId(gymId);

      setSchedule(() => data.data.schedule);
    })()
  }, [gymId]);

  return (
    <TableContainer>
        <Table cellSpacing="0">
          <tbody>
            <tr>
              <td></td>
              { WeekDays.map(({ eng, pl }) => <th>{ isEnglish ? eng : pl }</th>) }
            </tr>
            {
              schedule && schedule.map((row, i) => 
                <tr key={ i }>
                  <td key={ i + 1 }>{ Object.values(EGroupTrainingsHours)[i] }</td>
                  { row.map((workout, i2) => 
                    <td key={ i2 }>
                      { workout }
                      { (isBookable(i, i2) && workout) && <BookClassWorkoutButton /> }
                    </td>) }
                </tr>  
              )
            }
          </tbody>
        </Table>
    </TableContainer>
  )
}

export default Schedule