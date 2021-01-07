import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { ECountries } from '../../../__types__/ECountries';
import Select from '../../atoms/select';

const CountrySwitcher: FC<{ countries: string[], setCountry: Dispatch<SetStateAction<ECountries>>, country: ECountries }> = ({ countries, setCountry, country }) => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(() => e.target.value as ECountries);
  }
  
  return (
    <Select onChange={ handleChange } value={ countries[Object.values(ECountries).indexOf(country)] }>
      { countries.map((country, i) => 
      <option 
        value={ Object.values(ECountries)[i] } 
        key={ i }
      >
        { country }
      </option>) }
    </Select>
  )
}

export default CountrySwitcher;