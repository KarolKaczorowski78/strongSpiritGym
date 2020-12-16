import React from 'react';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { css } from 'styled-components';
import H2 from '../../../../atoms/h2';

export default function TrainingPerksSection() {
  

  return (
    <SectionWithId id={ ESectionIds.HOMEPAGE_PERKS } styling={ css`text-align: center` }>
      <H2>This section will be finished as soon as training perks are ready</H2>
    </SectionWithId>
  )
}
