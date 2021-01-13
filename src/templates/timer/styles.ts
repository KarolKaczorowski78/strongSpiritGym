import styled from 'styled-components';
import DivProto from '../../components/atoms/div';
import { EBreakpoints } from '../../__types__/EBreakpoints';

export const Container = styled(DivProto)`
  height: 600px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 110px auto;
  border: 5px solid black;
  border-radius: 15px;
  overflow: hidden;
  background: black;
  position: relative;
  min-height: 420px;
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    width: 260px;
  }
  @media (max-height: ${EBreakpoints.TIMER_BREAK}) {
    height: calc(100vh - 110px);
  }
  & > *:not(.timer-background-icon) {
    z-index: 1;
  }
`;

export const Title = styled(DivProto)`
  height: 12%;
  width: 100%;
  color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export const Footer = styled(DivProto)`
  width: 100%;
  height: 15%;
  color: lightgrey;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  border-top: 1px solid lightgrey;
`;

export const BackgroundIcon = styled(DivProto)`
  height: 73%;
  width: 100%;
  position: absolute;
  top: 12%;
  left: 0;
  color: lightgrey;
  opacity: .1;
  font-size: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    transform: rotate(-12deg);
  }
`;