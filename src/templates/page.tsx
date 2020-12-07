import React, { FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import Div from '../components/atoms/div';
import {  } from '../contexts/primitivesContext';

const PageTemplate = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 100px;
`;

const Page: FC<{ children: ReactNode }> = ({ children }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <PageTemplate>
      { children }
    </PageTemplate>
  )
}

export default Page;