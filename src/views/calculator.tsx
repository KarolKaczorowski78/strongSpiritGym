import React, { useContext, useEffect, useState } from 'react';
import Page from '../templates/page';
import styled, { css } from 'styled-components';
import { SectionWithId } from '../components/atoms/section';
import { ESectionIds } from '../__types__/ESectionsIds';
import H1Proto from '../components/atoms/h1';
import { PrimitivesContext } from '../contexts/primitivesContext';
import { Main as Content } from '../websiteTextContent/calculator';
import CalculatorForm from '../components/organisms/calculatorForm';
import H2 from '../components/atoms/h2';
import MainImg from '../img/calculator/main.jpg';
import Img from '../components/atoms/img';
import P from '../components/atoms/p';

const SectionStyling = css`
  padding: 110px 10px 30px;
  background: rgba(0, 0, 0, .7);
  * {
    color: lightgrey;
  }
  `;

const H1 = styled(H1Proto)`
  font-size: 3rem;
  padding-left: 8px;
  border-left: 5px solid red;
`;

const BackgroundImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .6;
  z-index: -1;
`;

export default function Calculator() {

  const { currentLanguage } = useContext(PrimitivesContext);
  const [caloricDemand, setCaloricDemand] = useState<number | null>(null);
  const isEnglish = currentLanguage === 'ENGLISH';

  useEffect(() => {
    caloricDemand && window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }, [caloricDemand])

  return (
    <Page>
      <SectionWithId id={ ESectionIds.CALORIES_CALCULATOR } styling={ SectionStyling }>
        <H1>{ Content.h1[isEnglish ? 'eng' : 'pl'] }</H1>
        <P>{ Content.p[isEnglish ? 'eng' : 'pl'] }</P>
        <CalculatorForm setCaloricDemand={ setCaloricDemand } />
        { caloricDemand && <H2>{ `${Content.h2[isEnglish ? 'eng' : 'pl']}${caloricDemand.toFixed(2)}` }</H2> }
        <BackgroundImg src={ MainImg } alt="" />
      </SectionWithId>
    </Page>
  )
}
