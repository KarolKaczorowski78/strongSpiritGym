import React, { FC, useContext, useEffect, useState } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Table, TableContainer } from './styles';
import { WeekDays } from '../../../websiteTextContent/Schedule';
import { EGroupTrainingsHours } from '../../../__types__/EGroupTrainingsHours';
import BookClassWorkoutButton from '../../molecues/BookClassWorkoutButton';
import { Schedule as ScheduleAxios } from '../../../axios/endpoints/schedule';
import { TSchedule } from '../../../__types__/ScheduleTypes';
import { ECountries } from '../../../__types__/ECountries';
import LoadingComponent from '../../molecues/Loading';

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

const Schedule: FC<{ gymId: number, country: ECountries }> = ({ gymId, country }) => {

  const [schedule, setSchedule] = useState<TSchedule | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  useEffect(() => {
    setIsPending(() => true);
    (async () => {
      const data = await ScheduleAxios.getByLocationId(gymId);

      setSchedule(() => data.data.schedule);
      setIsPending(() => false);
    })()
  }, [gymId, country]);

  return (
    <TableContainer>
        { isPending && <LoadingComponent /> }
        <Table cellSpacing="0">
          <tbody>
            <tr>
              <td></td>
              { WeekDays.map(({ eng, pl }) => <th key={ eng }>{ isEnglish ? eng : pl }</th>) }
            </tr>
            {
              (!isPending && schedule) && schedule.map((row, i) => 
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