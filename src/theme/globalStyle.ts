import { createGlobalStyle } from 'styled-components';
import { EBreakpoints } from '../__types__/EBreakpoints';

const { DESKTOP, TABLET, LAPTOP, MOBILE_BIG, MOBILE_SMALL } = EBreakpoints;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Acme', sans-serif;
    margin: 0;
    padding: 0;
    background: lightgrey;
  }

  html {
    @media (max-width: ${DESKTOP}) {
      font-size: 20px;
    }
    @media (max-width: ${LAPTOP}) {
      font-size: 18px;
    }
    @media (max-width: ${TABLET}) {
      font-size: 16px;
    }
    @media (max-width: ${MOBILE_BIG}) {
      font-size: 14px;
    }
    @media (max-width: ${MOBILE_SMALL}) {
      font-size: 12px;
    }
  }
`