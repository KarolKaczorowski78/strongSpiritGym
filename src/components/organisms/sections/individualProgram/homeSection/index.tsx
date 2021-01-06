import React, { FC } from 'react';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { SectionStyling, H1 } from './styles';
import ScrollToSectionButton from '../../../../molecues/ScrollToSectionButton/ScrollToSectionButtonArrow';

const HomeSection: FC<{ headling: string, buttonContent: string }> = ({ headling, buttonContent }) => {

  return (
    <SectionWithId id={ ESectionIds.INDIVIDUAL_PROGRAM_HOME } styling={ SectionStyling }>
      <H1>{ headling }</H1>
      <ScrollToSectionButton 
        targetSection={ ESectionIds.INDIVIDUAL_PROGRAM_ABOUT } 
        content={ buttonContent } 
      />
    </SectionWithId>
  )
}

export default HomeSection;