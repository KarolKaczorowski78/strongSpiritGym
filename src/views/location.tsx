import React, { FC } from 'react';
import Page from '../templates/page';
import ILocationHomeSection from '../__types__/ILocationHomeSection';
import LocationSection from '../components/organisms/sections/location/homeSection';
import LocationGymList from '../components/organisms/locationGymList';

const Location: FC<ILocationHomeSection> = (props) => {
  return (
    <Page>
      <LocationSection { ...props } />
      <LocationGymList country={ props.country } />
    </Page>
  )
}

export default Location