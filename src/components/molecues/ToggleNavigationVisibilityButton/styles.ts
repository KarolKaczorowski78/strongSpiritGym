import styled, { css } from 'styled-components';
import Span from '../../atoms/span';

export const ButtonStyle = css`
  width: 50px;
  height: 50px;
  border: 3px solid lightgrey;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hamburger = styled(Span)<{ navLinksVisible: boolean }>`
  width: 35px;
  height: 4px;
  background: ${({ navLinksVisible }) => navLinksVisible ? 'none' : 'lightgrey'};
  border-radius: 10%;
  position: relative;
  transition: .15s;
  transition-delay: ${({ navLinksVisible }) => navLinksVisible ? 'none' : '.1s'};
  ::before, ::after {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    height: 100%;
    background: lightgrey;
    border-radius: inherit;
    transition: .3s;
  }
  ${({ navLinksVisible }) => css`
    ::before {
      transform: ${navLinksVisible ? 'rotate(45deg)' : 'none'};
      bottom: ${navLinksVisible ? '0' : '8px'};
    }
    ::after {
      transform: ${navLinksVisible ? 'rotate(-45deg)' : 'none'};
      top: ${navLinksVisible ? '0' : '8px'};
    }
  `};
`;