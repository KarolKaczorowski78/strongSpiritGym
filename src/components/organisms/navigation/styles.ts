import styled, { css } from 'styled-components';
import Div from '../../atoms/div';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 2;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 12px;
  background: #050505;
  min-width: 200px;
  @media (max-width: ${EBreakpoints.NAV_BREAK}) {
    justify-content: space-between;
  }
`;

export const MainNavigationButton = css`

`;

export const NavigationLinksContainer = styled(Div)`
  flex: 1;
  height: 0;
  position: relative;
  @media (max-width: ${EBreakpoints.NAV_BREAK}) {
    position: absolute;
    top: 100px;
    width: 100%;
    left: 0;
  }
`;

export const NavigationLinksContainerStatic = styled(Div)<{ visible: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 0;
  background: black;
  @media (max-width: ${EBreakpoints.NAV_BREAK}) {
    overflow-y: auto;
    flex-direction: column;
    height: calc(100vh - 100px);
    justify-content: flex-start;
    clip-path: circle(${({ visible }) => visible ? '1500px' : '0px'} at 0% 0%);
  }
;`
