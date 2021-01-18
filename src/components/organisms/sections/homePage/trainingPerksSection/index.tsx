import React from 'react';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { H2, TextContainer, SectionStyling, ChartContainer, P, Link } from './styles';
import ChartColumn from '../../../../molecues/ChartColumn';
import { loremIpsumLong } from '../../../../../websiteTextContent/loremIpsum';
import { EMainRoutes } from '../../../../../__types__/ERoutes';

export default function TrainingPerksSection() {
  

  return (
    <SectionWithId id={ ESectionIds.HOMEPAGE_PERKS } styling={ SectionStyling }>
      <TextContainer>
        <H2>Improve Your training schedule</H2>
        <P>{ loremIpsumLong }</P>
        <Link to={ EMainRoutes.TRAINING_PERKS }>View training perks</Link>
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
