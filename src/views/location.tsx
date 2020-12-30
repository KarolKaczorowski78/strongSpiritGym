import React, { FC } from 'react';
import Page from '../templates/page';
import ILocationHomeSection from '../__types__/ILocationHomeSection';
import LocationSection from '../components/organisms/sections/location/homeSection';

const Location: FC<ILocationHomeSection> = (props) => {
  return (
    <Page>
      <LocationSection { ...props } />
    </Page>
  )
}

export default Location