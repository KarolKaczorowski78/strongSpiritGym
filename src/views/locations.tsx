import React, { useContext } from 'react';
import { PrimitivesContext } from '../contexts/primitivesContext';
import Page from '../templates/page';
import HomeSection from '../components/organisms/sections/locations/homeSection';
import { LocationsContents } from '../websiteTextContent/Locations';
import LocationSection from '../components/organisms/sections/locations/locationSection';
import { ESectionIds } from '../__types__/ESectionsIds';
import GalleryPageTouch from '../templates/galleryPageTouch';
import GalleryPageWheel from '../templates/galleryPageWheel';

const { LOCATIONS_BR, LOCATIONS_HOME, LOCATIONS_PL, LOCATIONS_USA } = ESectionIds;
const ids = [LOCATIONS_HOME, LOCATIONS_PL, LOCATIONS_USA, LOCATIONS_BR];

export default function Locations() {

  const { isTouchDevice, windowHeight } = useContext(PrimitivesContext);
  console.log(windowHeight > 550);
  return (
    <Page>
      { windowHeight > 500 && (isTouchDevice ? <GalleryPageTouch sectionsIds={ ids } /> : <GalleryPageWheel sectionsIds={ ids } />) }
      <HomeSection />
      { LocationsContents.map(location => <LocationSection { ...location } />) }
    </Page>
  )
}
