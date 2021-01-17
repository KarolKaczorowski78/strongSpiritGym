import styled from 'styled-components';
import DivProto from '../../atoms/div';
import ImgProto from '../../atoms/img';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Container = styled(DivProto)`
  width: 314px;
  height: 550px;
  border-radius: 15px;
  border-left: 7px solid black;
  border-right: 7px solid black;
  overflow: hidden;
  margin: 40px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: black;
  box-shadow: 0 0 15px lightgrey;
  @media (min-width: ${EBreakpoints.DESKTOP}) {
    transform: scale(1.3);
  }
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    transform: scale(.8);
  }
`;

export const Part = styled(DivProto)`
  width: 100%;
  height: 50px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Speaker = styled(DivProto)`
  width: 20%;
  height: 6px;
  box-shadow: 0 0 6px lightgrey;
  border-radius: 5px;
`;

export const MenuButton = styled(DivProto)`
  box-shadow: 0 0 6px lightgrey;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;