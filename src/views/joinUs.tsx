import React, { useContext } from 'react';
import { PrimitivesContext } from '../contexts/primitivesContext';
import Page from '../templates/page';
import ImgSrc from '../img/join/main.jpg';
import styled, { css } from 'styled-components';
import ImgProto from '../components/atoms/img';
import H1Proto from '../components/atoms/h1';
import P from '../components/atoms/p';
import { SectionWithId } from '../components/atoms/section';
import { ESectionIds } from '../__types__/ESectionsIds';
import Form from '../components/organisms/joinUsForm';

const Img = styled(ImgProto)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 100px;
  left: 0;
  object-fit: cover;
  object-position: right;
  z-index: -1;
`;

const SectionStyling = css`
  background: rgba(0, 0, 0, .75);
  padding: 110px 15px 20px;
  color: lightgrey;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled(H1Proto)`
  font-size: 3rem;
  text-align: center;
  border-bottom: 5px solid red;
`;

export default function Joinus() {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <Page>
      <SectionWithId id={ ESectionIds.JOIN_US } styling={ SectionStyling }>
        <Img src={ ImgSrc } alt="" />
        <H1>{ isEnglish ? 'Join us' : 'Dolacz do nas' }</H1>
        <P>{ isEnglish ? 'Fill the form and let us know about yourself' : 'Wypelnil formularz i daj nam znac o sobie'}</P>
        <Form />
      </SectionWithId>
    </Page>
  )
}
