import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { LocationContext } from '../../../contexts/locationContext';
import GymSwitcher from '../../molecues/GymSwitcher';
import CountrySwitcher from '../../molecues/CountrySwitcher';
import { CountriesTranslations } from '../../../__types__/ECountries';
import styled from 'styled-components';
import Div from '../../atoms/div';

const Container = styled(Div)`
  & > select {
    display: block;
  }
`;

const LocationSwitcher = () => {

  const { gymId, setGymId, country, setCountry } = useContext(LocationContext);
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <Container>
      <CountrySwitcher 
        countries={ CountriesTranslations.map(({ eng, pl }) => isEnglish ? eng : pl) }
        country={ country }
        setCountry={ setCountry }
      />
      <GymSwitcher 
        countryState={ country }
        currentGymId={ gymId }
        setCurrentGymId={ setGymId }
      />
    </Container>
  )
}

export default LocationSwitcher;