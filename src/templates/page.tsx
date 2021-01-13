import React, { FC, ReactNode, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Div from '../components/atoms/div';
import { TimerContext } from '../contexts/timerContext';
import { useLocation } from 'react-router-dom';
import SmallTimer from '../components/organisms/Timer/SmallTimer';

const PageTemplate = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

const Page: FC<{ children: ReactNode }> = ({ children }) => {

  const { runningStatus } = useContext(TimerContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <PageTemplate>
      { (!pathname.includes('timer') && runningStatus) && <SmallTimer /> }
      { children }
    </PageTemplate>
  )
}

export default Page;