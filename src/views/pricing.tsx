import React, { useContext } from 'react';
import { PrimitivesContext } from '../contexts/primitivesContext';
import Page from '../templates/page';
import { Pricing, headling } from '../websiteTextContent/ClassPricing';
import ClassPricing from '../components/molecues/ClassPricing';
import styled from 'styled-components';
import Div from '../components/atoms/div';
import H1 from '../components/atoms/h1';

const PricingContainer = styled(Div)`
  padding-top: 110px;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: linear-gradient(rgb(0, 0, 0), rgb(20, 20, 20), rgb(40, 40, 40));
  color: lightgrey;
`;

export default function PricingView() {
  
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <Page>
      <PricingContainer>
        <H1 style={{ width: '100%' }}>
          { isEnglish ? headling.eng : headling.pl }
        </H1>
        {
          Pricing.map(({ headling, p, price, img }) => 
          <ClassPricing 
            headling={ headling }
            p={ isEnglish ? p.eng : p.pl }
            price={ isEnglish ? `Buy now for $${price.eng}` : `Kup teraz za ${price.pl} zł` }
            img={ img }
            key={ headling }
          />)
        }
      </PricingContainer>
    </Page>
  )
}
