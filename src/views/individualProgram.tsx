import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../contexts/primitivesContext';
import styled from 'styled-components';
import ImgProto from '../components/atoms/img';
import DivProto from '../components/atoms/div';
import Page from '../templates/page';
import IIndividualProgramPage from '../__types__/IIndividualProgramPage';
import HomeSection from '../components/organisms/sections/individualProgram/homeSection';
import AboutSection from '../components/organisms/sections/individualProgram/aboutSection';
import CoachesSection from '../components/organisms/sections/individualProgram/coachesSection';

const Div = styled(DivProto)`
  position: fixed;
  width: 100%;
  height: calc(100vh - 100px);
  left: 0;
  top: 100px;
  z-index: -1;
`;

const DivRelative = styled(DivProto)`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
  background: blue;
`;

export const DivBlack = styled(DivProto)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .9);
`;

const Img = styled(ImgProto)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const IndividualProgram: FC<IIndividualProgramPage> = ({ backgroundImg, homeSection, aboutSection }) => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <Page>
      <h1>Individual program</h1>
      <Div>
        <DivRelative>
          <DivBlack />
          <Img src={ backgroundImg } alt="" />
        </DivRelative>
      </Div>
      <HomeSection 
        headling={ isEnglish ? homeSection.headling.eng : homeSection.headling.pl }
        buttonContent={ isEnglish ? 'read more' : 'czytaj dalej' } 
      />
      <AboutSection 
        aboutDiscipline={{
          headling: isEnglish ? aboutSection.aboutDiscipline.headling.eng : aboutSection.aboutDiscipline.headling.pl,
          content: isEnglish ? aboutSection.aboutDiscipline.content.eng : aboutSection.aboutDiscipline.content.pl,
        }}
        aboutProgram={{
          headling: isEnglish ? aboutSection.aboutProgram.headling.eng : aboutSection.aboutProgram.headling.pl,
          content: isEnglish ? aboutSection.aboutProgram.content.eng : aboutSection.aboutProgram.content.pl,
        }}
      />
      <CoachesSection />
    </Page>
  )
}

export default IndividualProgram