import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ESectionIds } from '../../../__types__/ESectionsIds';

const Section = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: relative;
`;

export const SectionWithId: FC<{ children: ReactNode, id: ESectionIds }> = ({ children, id }) => {
  return (
    <Section id={ id }>
      { children }
    </Section>
  )
}

export default Section;