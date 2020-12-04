import styled, { css } from 'styled-components';
import Div from '../../atoms/div';

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
`;

export const MainNavigationButton = css`
  height: 100%;
`;

export const NavigationLinksContainer = styled(Div)`
  flex: 1;
  height: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;