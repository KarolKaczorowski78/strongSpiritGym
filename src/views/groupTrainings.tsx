import React from 'react';
import Page from '../templates/page';
import HomeSection from '../components/organisms/sections/groupTrainings/homeSection';
import ClassSection from '../components/organisms/sections/groupTrainings/classSection';
import SeeScheduleSection from '../components/organisms/sections/groupTrainings/seeScheduleSection';
import { ClassesSection } from '../websiteTextContent/GroupTrainingsPage';

export default function Grouptrainings() {
  

  return (
    <Page>
      <HomeSection />
      {
        ClassesSection.map(data => <ClassSection { ...data } />)
      }
      <SeeScheduleSection />
    </Page>
  )
}
