import React, { useContext } from 'react';
import Div from '../../../../atoms/div';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import ScrollToSectionButton from '../../../../molecues/ScrollToSectionButton';
import { SectionStyling, H2, P, ButtonStyling, TilesContainer } from './styles';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { AboutSection as Content, Tiles } from '../../../../../websiteTextContent/IndividualPrograms';
import IndividualProgramPlanTile from '../../../../molecues/IndividualProgramPlanTile';

const { headling, p, button } = Content;

const AboutSection = () => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ ESectionIds.INDIVIDUAL_PROGRAMS_ABOUT } styling={ SectionStyling }>
      <Div>
        <H2>{ isEnglish ? headling.eng : headling.pl }</H2>
        <P>{ isEnglish ? p.eng : p.pl }</P>
        <ScrollToSectionButton 
          targetSection={ ESectionIds.INDIVIDUAL_PROGRAMS_MMA }
          styling={ ButtonStyling }
        >
          { isEnglish ? button.eng : button.pl }
        </ScrollToSectionButton>
      </Div>
      <TilesContainer>
        { 
          Tiles.map(({ icon, content }, i) => 
            <IndividualProgramPlanTile 
              icon={ icon } 
              content={ isEnglish ? content.eng : content.pl }  
              key={ i }
              index={ i + 1 }
            />) 
        }
      </TilesContainer>
    </SectionWithId>
  )
}

export default AboutSection;