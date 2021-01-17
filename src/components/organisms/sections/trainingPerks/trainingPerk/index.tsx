import React, { FC } from 'react';
import { SectionStyling, TextContainer, H2, P, Link } from './styles';
import { SectionWithId } from '../../../../atoms/section';
import MobileContainer from '../../../../molecues/MobileContainer';
import ITrainingPerkSection from '../../../../../__types__/ITrainingPerkSection';

const TrainingPerk: FC<ITrainingPerkSection> = ({ headling, id, p, images, route, link }) => {
  return (
    <SectionWithId id={ id } styling={ SectionStyling }>
      <TextContainer>
        <H2>{ headling }</H2>
        <P>{ p }</P>
        <Link to={ route }>
          { link }
        </Link>
      </TextContainer>
      <MobileContainer imgSrcs={ images } />
    </SectionWithId>
  )
}

export default TrainingPerk;