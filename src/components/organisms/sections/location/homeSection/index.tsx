import React, { FC } from 'react';
import { SectionWithId } from '../../../../atoms/section';
import ILocationHomeSection from '../../../../../__types__/ILocationHomeSection';
import { H1 } from './styles';

const HomeSection: FC<ILocationHomeSection> = ({ id, overview, countryName }) => {
  return (
    <SectionWithId id={ id }>
      <H1>{ countryName.eng }</H1>
    </SectionWithId>
  )
}

export default HomeSection;