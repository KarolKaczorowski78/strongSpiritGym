import React, { UIEvent, useState } from 'react';
import styled from 'styled-components';
import Page from '../templates/page';
import HomeSection from '../components/organisms/sections/locations/homeSection';
import { LocationsContents } from '../websiteTextContent/Locations';
import LocationSection from '../components/organisms/sections/locations/locationSection';
import Div from '../components/atoms/div';

const Wrapper = styled(Div)`
  height: calc(100vh - 100px);
  width: 100%;
  overflow-y: scroll;
  min-height: 400px;
  margin-top: 100px;
  transition: 2s;
`;

export default function Locations() {

  const [scrollValue, setScrollValue] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  
  const handleScroll = async (e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
  }

  return (
    <Page>
      <Wrapper onScroll={ handleScroll } id="locations-wrapper">
        <HomeSection />
        { LocationsContents.map(location => <LocationSection { ...location } />) }
      </Wrapper>
    </Page>
  )
}
