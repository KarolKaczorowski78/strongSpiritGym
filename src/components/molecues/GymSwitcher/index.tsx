import React, { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useContext } from 'react';
import { ECountries } from '../../../__types__/ECountries';
import { LocationContext } from '../../../contexts/locationContext';
import Select from '../../atoms/select';

const CountrySwitcher: FC<{ countryState: ECountries, setCurrentGymId: Dispatch<SetStateAction<number>>, currentGymId: number }> = ({ countryState, setCurrentGymId, currentGymId }) => {
  
  const { gyms } = useContext(LocationContext);
  const ref = useRef<HTMLSelectElement>(null);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentGymId(() => parseInt(e.target.value));
  }

  useEffect(() => {
    const options = ref.current?.options;

    if (options) {
      const option = Array.from(options).find(({ value }) => parseInt(value) === currentGymId)
    
      if (option) {
        option.selected = true;
      }
    }
  }, [currentGymId])

  return (
    <Select onChange={ handleChange } ref={ ref }>
      { gyms.map(({ city, adress, id }) => 
      <option value={ id } key={ id }>
        { `${city}, ${adress}` }
      </option>) }
    </Select>
  )
}

export default CountrySwitcher;