import styled, { FlattenSimpleInterpolation } from 'styled-components';

const Option = styled.option<{ styling?: FlattenSimpleInterpolation }>`
  ${({ styling }) => styling && styling};
`;

export default Option;