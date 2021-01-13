import styled, { css } from 'styled-components';
import DivProto from '../../atoms/div';

export const Container = styled(DivProto)<{ fontSizeRem?: number, color: string }>`
  display: inline-block;
  ${({ fontSizeRem, color }) => css`
    color: ${color};
    font-size: ${fontSizeRem ? fontSizeRem : 1}rem;
  `};
`;