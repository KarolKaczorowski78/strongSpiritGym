import React, { FC, useEffect, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Select } from './styles';
import { Locations } from '../../../axios/endpoints/locations';

const ScheduleFilter: FC<{ setState: Dispatch<SetStateAction<number>> }> = ({ setState }) => {

  const [options, setOptions] = useState<{ content: string, id: number }[]>([]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState(() => parseInt(e.target.value));
  }

  useEffect(() => {
    (async () => {
      const newOptions = await Locations.getAll();

      setOptions(() => newOptions.data.map(({ adress, city, id }) => {
        return {
          content: `${adress}, ${city}`,
          id: id,
        }
      }));
    })()
  }, []);

  return (
    <Select onChange={ handleChange }>
      { options.map(({ content, id }, i) => 
        <option 
          value={ id } 
          key={ i }
        >
          { content }
        </option>) }
    </Select>
  )
}

export default ScheduleFilter;