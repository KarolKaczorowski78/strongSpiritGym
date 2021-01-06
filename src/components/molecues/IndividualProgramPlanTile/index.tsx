import React, { FC } from 'react';
import { Container, Text, IndexContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IIndividualProgramPlanTile from '../../../__types__/IIndividualProgramPlanTile';

const IndividualProgramPlanTile: FC<IIndividualProgramPlanTile> = ({ icon, content, index }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={ icon } />
      <Text>{ content }</Text>
      <IndexContainer>{ index }</IndexContainer>
    </Container>
  )
}

export default IndividualProgramPlanTile;