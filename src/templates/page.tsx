import React, { FC, ReactNode, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Div from '../components/atoms/div';
import { PrimitivesContext } from '../contexts/primitivesContext';

const PageTemplate = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 100px;
`;

const Page: FC<{ children: ReactNode }> = ({ children }) => {

  const { setWindowScrollValue } = useContext(PrimitivesContext);

  useEffect(() => {
    setWindowScrollValue(() => 0);
  }, [])

  return (
    <PageTemplate>
      { children }
    </PageTemplate>
  )
}

export default Page;