import styled from 'styled-components';
import DivProto from '../../atoms/div';
import ImgProto from '../../atoms/img';

export const Container = styled(DivProto)`
  width: 100%;
  height: 450px;
  overflow: hidden;
  position: relative;
  display: flex;
`;

export const Img = styled(ImgProto)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  flex-shrink: 0;
`;