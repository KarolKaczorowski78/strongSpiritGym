import styled, { css } from 'styled-components';
import Div from '../../atoms/div';
import Span from '../../atoms/span';

export const Container = styled(Div)`
  height: 100%;
  width: auto;
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Word = styled(Span)<{ transformXValue?: number }>`
  color: lightgrey;
  text-shadow: 0 0 7px black;
  ${({ transformXValue }) => transformXValue && css`
    transform: translateX(${transformXValue}px);
  `};
`;