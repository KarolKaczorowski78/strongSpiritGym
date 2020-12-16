import React, { FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import ISectionWithId from '../../../__types__/ISectionWithId';

const Section = styled.section<{ styling?: FlattenSimpleInterpolation }>`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: relative;
  ${({ styling }) => styling};
`;

export const SectionWithId: FC<ISectionWithId> = ({ children, id, styling }) => {
  return (
    <Section styling={ styling } id={ id }>
      { children }
    </Section>
  )
}

export default Section;