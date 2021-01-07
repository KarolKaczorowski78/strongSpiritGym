import styled, { css } from 'styled-components';
import H2Proto from '../../../../atoms/h2';

export const SectionStyling = css`
  padding: 20px 35px;
  * {
    color: lightgrey;
  }
`;

export const H2 = styled(H2Proto)`
  font-size: 3rem;
  padding-left: 10px;
  border-left: 4px solid red;
  margin: 15px 0;
`;