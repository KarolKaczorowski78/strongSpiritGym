import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Table, TableContainer } from './styles';
import { WeekDays } from '../../../websiteTextContent/Schedule';
import { exampleSchedule } from '../../../ExampleScheduleData';
import { EGroupTrainingsHours } from '../../../__types__/EGroupTrainingsHours';
import BookClassWorkoutButton from '../../molecues/BookClassWorkoutButton';

const Schedule = () => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <TableContainer>
        <Table cellSpacing="0">
          <tbody>
            <tr>
              <td></td>
              { WeekDays.map(({ eng, pl }) => <th>{ isEnglish ? eng : pl }</th>) }
            </tr>
            {
              exampleSchedule.map((row, i) => 
                <tr key={ i }>
                  <td key={ i + 1 }>{ Object.values(EGroupTrainingsHours)[i] }</td>
                  { row.map((workout, i2) => 
                    <td key={ i2 }>
                      { workout }
                      { (new Date().getDay() < i2 + 1 && workout) && <BookClassWorkoutButton /> }
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