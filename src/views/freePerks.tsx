import React, { useEffect, useContext } from 'react';
import Page from '../templates/page';
import MobileContainer from '../components/molecues/MobileContainer';
import { Sections } from '../websiteTextContent/TrainingPerks';
import TrainingPerkSection from '../components/organisms/sections/trainingPerks/trainingPerk';
import TimerImage from '../img/trainingPerks/timer.png';
import TimerImage2 from '../img/trainingPerks/timer2.png';
import CalcImage from '../img/trainingPerks/calculator.png';
import CalcImage2 from '../img/trainingPerks/calculator2.png';
import { PrimitivesContext } from '../contexts/primitivesContext';
import TrainingPerk from '../components/organisms/sections/trainingPerks/trainingPerk';

export default function Freeperks() {
  
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = 'lightgrey';
    }
  }, [])

  return (
    <Page>
      { Sections.map(({ id, route, images, headling, p, link }) => 
      <TrainingPerk 
        id={ id }
        route={ route }
        images={ images }
        headling={ headling[isEnglish ? 'eng' : 'pl'] }
        p={ p[isEnglish ? 'eng' : 'pl'] }
        link={ link[isEnglish ? 'eng' : 'pl'] }
      />) }
    </Page>
  )
}
