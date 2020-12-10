import React, { FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import Div from '../components/atoms/div';

const PageTemplate = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100vh;
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