import styled, { css } from 'styled-components';
import Span from '../span';

const ErrorMessage = styled(Span)<{ fontSizeRem?: number }>`
  color: red;
  margin-bottom: 20px;
  ${({ fontSizeRem }) => css`
    font-size: ${fontSizeRem ? fontSizeRem : 1.1}rem;
  `};
`;

export default ErrorMessage;