import styled, { FlattenSimpleInterpolation} from 'styled-components';

const Select = styled.select<{ styling?: FlattenSimpleInterpolation }>`
  background: black;
  border: none;
  margin: 15px 0;
  width: 250px;
  padding: 8px 5px;
  border: 1px solid lightgrey;
  ${({ styling }) => styling && styling};
`;

export default Select;