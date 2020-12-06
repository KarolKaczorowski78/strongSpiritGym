import styled, { css } from 'styled-components';
import Button from '../../atoms/button';
import Div from '../../atoms/div';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Container = styled(Div)`
  height: 100px;
  position: relative;
  vertical-align: middle;
  line-height: 100px;
  @media (max-width: ${EBreakpoints.NAV_BREAK}) {
    height: auto;
    line-height: normal;
  }
`;

export const ButtonStyle = css`
  color: white;
`;

export const ShowSubTopicsButton = styled(Button)`
  background: none;
  border: none;
  color: white;
`;

export const ChildRouteLinksContainer = styled(Div)`
  padding: 10px 15px;
  background: lightgrey;
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  border-radius: 5%;
  border: 1px solid black;
  width: 95%;
  text-align: center;
  @media (max-width: ${EBreakpoints.NAV_BREAK}) {
    position: static;
    background: none;
    & > a {
      color: white;
    }
  }
`;