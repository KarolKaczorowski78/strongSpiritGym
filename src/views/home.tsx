import React from 'react';
import Page from '../templates/page';
import HomeSection from '../components/organisms/sections/homePage/homeSection';
import OfferSection from '../components/organisms/sections/homePage/offerSection';
import TrainingPerksSection from '../components/organisms/sections/homePage/trainingPerksSection';
import StatisticCounterContainer from '../components/organisms/statisticCounterContainer';

export default function Home() {

  
  return (
    <Page>
      <HomeSection />
      <OfferSection />
      <StatisticCounterContainer />
      <TrainingPerksSection />
    </Page>
  )
}
