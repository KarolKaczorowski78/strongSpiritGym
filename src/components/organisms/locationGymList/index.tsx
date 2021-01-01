import React, { FC, useEffect, useState, useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { ECountries } from '../../../__types__/ECountries';
import IGym from '../../../__types__/IGym';
import Gym from '../../molecues/Gym';
import SearchBox from '../../molecues/SearchBox';
import { Container, H2, LocationsContainer } from './styles';
import { Locations } from '../../../axios/endpoints/locations';

const LocationGymList: FC<{ country: ECountries }> = ({ country }) => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const [gyms, setGyms] = useState<IGym[]>([]);
  const [searchCity, setSearchCity] = useState<string>('');
  const isEnglish = currentLanguage === 'ENGLISH';

  useEffect(() => {
    (async () => {
      const newGyms = await Locations.getByCountry(country);
      setGyms(() => newGyms.data);
    })()
  }, []);

  return (
    <Container>
      <H2>{ isEnglish ? 'SSG gym list' : 'Lista klubow SSG' }</H2>
      <SearchBox
        placeholder={ isEnglish ? 'City' : 'Miasto' }
        state={ searchCity }
        setState={ setSearchCity }
      />
      {/* <LocationsContainer> */}
        { gyms.map(gym => 
          gym.city.toLowerCase().includes(searchCity.toLowerCase()) ? <Gym { ...gym } /> : <></>) }
      {/* </LocationsContainer> */}
    </Container>
  )
}

export default LocationGymList;