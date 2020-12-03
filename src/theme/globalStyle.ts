import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Acme', sans-serif;
    font-size: 17px;
    @media (max-width: 1200px) {
      font-size: 15px;
    }
    @media (max-width: 700px) {
      font-size: 13px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: lightgrey;
  }
`