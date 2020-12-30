import React, { useContext, useState } from 'react';
import { PrimitivesContext } from '../contexts/primitivesContext';
import Page from '../templates/page';
import HomeSection from '../components/organisms/sections/locations/homeSection';
import { LocationsContents } from '../websiteTextContent/Locations';
import LocationSection from '../components/organisms/sections/locations/locationSection';
import { ESectionIds } from '../__types__/ESectionsIds';
import GalleryPageTouch from '../templates/galleryPageTouch';
import GalleryPageWheel from '../templates/galleryPageWheel';
import IGalleryPage from '../__types__/IGalleryPage';

const { LOCATIONS_BR, LOCATIONS_HOME, LOCATIONS_PL, LOCATIONS_USA } = ESectionIds;
const ids = [LOCATIONS_HOME, LOCATIONS_PL, LOCATIONS_USA, LOCATIONS_BR];

export default function Locations() {

  const { isTouchDevice, windowHeight } = useContext(PrimitivesContext);
  const [currSection, setCurrSection] = useState<number>(0);

  const templateProps: IGalleryPage = {
    sectionsIds: ids,
    currSectionIndex: currSection,
    setCurrSectionIndex: setCurrSection,
  }

  return (
    <Page>
      { windowHeight > 500 && (isTouchDevice ? <GalleryPageTouch { ...templateProps } /> : <GalleryPageWheel { ...templateProps } />) }
      <HomeSection setCurrSectionIndex={ setCurrSection } />
      { LocationsContents.map(location => <LocationSection { ...location } />) }
    </Page>
  )
}
