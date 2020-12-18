import React from 'react';
import Page from '../templates/page';
import Schedule from '../components/organisms/schedule';
import H1 from '../components/atoms/h1';
import styled from 'styled-components';
import Div from '../components/atoms/div';
import ImgProto from '../components/atoms/img';
import ScheduleImage from '../img/schedule/backgroundBig.jpg';

const ScheduleContainer = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .6);
  * {
    color: lightgrey;
  }
`;

const Img = styled(ImgProto)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: right;
`;

export default function ScheduleView() {
  

  return (
    <Page>
      <ScheduleContainer>
        <H1 style={{ marginTop: '110px' }}>Schedule</H1>
        <Schedule />
      </ScheduleContainer>
      <Img src={ ScheduleImage } alt="" />
    </Page>
  )
}

