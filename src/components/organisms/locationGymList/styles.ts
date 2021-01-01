import styled from 'styled-components';
import DivProto from '../../atoms/div';
import H2Proto from '../../atoms/h2';

export const Container = styled(DivProto)`
  width: 100%;
  text-align: center;
`;

export const LocationsContainer = styled(DivProto)`
  height: 400px;
  overflow-y: auto;
`;

export const H2 = styled(H2Proto)`
  font-size: 3rem;
`;