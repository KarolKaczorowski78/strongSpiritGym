import React, { useContext } from 'react';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { H2, TextContainer, SectionStyling, ChartContainer, P, Link } from './styles';
import ChartColumn from '../../../../molecues/ChartColumn';
import { EMainRoutes } from '../../../../../__types__/ERoutes';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { TrainingPerksSection as Content } from '../../../../../websiteTextContent/HomePage';

export default function TrainingPerksSection() {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';
  

  return (
    <SectionWithId id={ ESectionIds.HOMEPAGE_PERKS } styling={ SectionStyling }>
      <TextContainer>
        <H2>{ Content.headling[isEnglish ? 'eng' : 'pl'] }</H2>
        <P>{ Content.p[isEnglish ? 'eng' : 'pl'] }</P>
        <Link to={ EMainRoutes.TRAINING_PERKS }>
          { Content.link[isEnglish ? 'eng' : 'pl'] }
        </Link>
      </TextContainer>
      <ChartContainer>
        <ChartColumn percentage={ 30 } />
        <ChartColumn percentage={ 50 } />
        <ChartColumn percentage={ 60 } />
        <ChartColumn percentage={ 80 } />
        <ChartColumn percentage={ 90 } />
      </ChartContainer>
    </SectionWithId>
  )
}
