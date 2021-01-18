import styled from 'styled-components';
import DivProto from '../../atoms/div';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Container = styled(DivProto)`
  width: 100px;
  margin: 0 15px;
  background: red;
  position: relative;
  @media (max-width: ${EBreakpoints.TABLET}) {
    margin: 0 5px;
  }
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 60px;
  }
`;

export const Top = styled(DivProto)`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  border-radius: 50%;
  background: red;
  border: 2px solid lightgrey;
`;