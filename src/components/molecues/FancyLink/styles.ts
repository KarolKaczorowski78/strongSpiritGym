import styled from 'styled-components';
import LinkProto from '../../atoms/link';

export const Link = styled(LinkProto)`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: black;
  & > svg {
    transition: .3s;
  }
  &:hover {
    & > svg {
      transform: translateX(10px);
    }
  }
`;