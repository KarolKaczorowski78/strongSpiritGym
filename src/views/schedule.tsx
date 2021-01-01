import React, { useContext, useState } from 'react';
import { PrimitivesContext } from '../contexts/primitivesContext';
import Page from '../templates/page';
import Schedule from '../components/organisms/schedule';
import H1 from '../components/atoms/h1';
import P from '../components/atoms/p';
import styled from 'styled-components';
import Div from '../components/atoms/div';
import ImgProto from '../components/atoms/img';
import ScheduleImage from '../img/schedule/backgroundBig.jpg';
import { getCurrentWeek } from '../universal/getCurrentWeek';
import ScheduleFilter from '../components/molecues/ScheduleFilter';

const ScheduleContainer = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: rgba(0, 0, 0, .6);
  * {
    color: lightgrey;
  }
`;

const Img = styled(ImgProto)`
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  object-position: right;
`;

export default function ScheduleView() {
  
  const { currentLanguage } = useContext(PrimitivesContext)
  const [currentGymId, setCurrentGymId] = useState<number>(1);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <Page>
      <ScheduleContainer>
        <H1 style={{ marginTop: '110px' }}>{ isEnglish ? 'Schedule' : 'Harmonogram' }</H1>
        <P>{ getCurrentWeek() }</P>
        <ScheduleFilter setState={ setCurrentGymId } />
        <Schedule gymId={ currentGymId } />
        <Img src={ ScheduleImage } alt="" />
      </ScheduleContainer>
    </Page>
  )
}

