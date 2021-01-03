import React from 'react';
import Page from '../templates/page';
import HomeSection from '../components/organisms/sections/individualPrograms/homeSection';
import { Sections } from '../websiteTextContent/IndividualPrograms';
import ProgramSection from '../components/organisms/sections/individualPrograms/programSection';
import AboutSection from '../components/organisms/sections/individualPrograms/aboutSection';

export default function Individualprograms() {

  return (
    <Page>
      <HomeSection />
      <AboutSection />
      { Sections.map(section => <ProgramSection { ...section } />) }
    </Page>
  )
}
