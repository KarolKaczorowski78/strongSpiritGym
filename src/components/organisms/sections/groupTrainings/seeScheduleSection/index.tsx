import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section/index';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { Img, SectionStyling, TextContainer, H1, Link, ImgStyling } from './styles';
import { SeeScheduleSection as Content } from '../../../../../websiteTextContent/GroupTrainingsPage';
import { ECssUnits } from '../../../../../__types__/ECssUnits';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';
import { removeUnitAndParseInt } from '../../../../../universal/removeUnitAndParseInt';
import P from '../../../../atoms/p';
import { EChildRoutes } from '../../../../../__types__/ERoutes';
import { LazyImg } from '../../../../atoms/img';

const { headling, linkContent, imgBig, imgSmall, p } = Content;

export default function SeeScheduleSection() {
  
  const { currentLanguage, windowWidth } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ ESectionIds.GROUP_WORKOUTS_SCHEDULE } styling={ SectionStyling }>
      <LazyImg
        src={ 
          removeUnitAndParseInt(EBreakpoints.TABLET_SMALL, ECssUnits.pixels) < windowWidth ? 
          imgBig : imgSmall
        }
        styling={ ImgStyling }
      />
      <TextContainer>
        <H1>
          { isEnglish ? headling.eng : headling.pl }
        </H1>
        <P>
          {
            isEnglish ? p.eng : p.pl
          }
        </P>
        <Link to={ EChildRoutes.SCHEDULE }>
          {
            isEnglish ? linkContent.eng : linkContent.pl
          }
        </Link>
      </TextContainer>
    </SectionWithId>
  )
}
