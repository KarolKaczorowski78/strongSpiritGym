import React, { FC } from 'react';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { SectionWithId } from '../../../../atoms/section';
import { SectionStyling } from './styles';
import IndividualProgramArticle from '../../../../molecues/IndividualProgramArticle';
import IIndividualProgramAboutSection from '../../../../../__types__/IIndividualProgramAboutSection';

const AboutSection: FC<IIndividualProgramAboutSection> = ({ aboutDiscipline, aboutProgram }) => {
  return (
    <SectionWithId id={ ESectionIds.INDIVIDUAL_PROGRAM_ABOUT } styling={ SectionStyling }>
      <IndividualProgramArticle { ...aboutDiscipline } />
      <IndividualProgramArticle { ...aboutProgram } />
    </SectionWithId>
  )
}

export default AboutSection;