import React from 'react';
import Page from '../templates/page';
import HomeSection from '../components/organisms/sections/individualPrograms/homeSection';
import { Sections } from '../websiteTextContent/IndividualPrograms';
import ProgramSection from '../components/organisms/sections/individualPrograms/programSection';

export default function Individualprograms() {

  return (
    <Page>
      <HomeSection />
      { Sections.map(section => <ProgramSection { ...section } />) }
    </Page>
  )
}
