import React, { FC } from 'react';
import IGym from '../../../__types__/IGym';
import { faMapMarkerAlt, faCity, faPhoneSquareAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Adress } from './styles';

const Gym: FC<IGym> = ({ adress, city, phone, email }) => {
  return (
    <Container>
      <Adress>
      <FontAwesomeIcon icon={ faMapMarkerAlt } />&nbsp;&nbsp;{ adress },
      </Adress>
      <Adress>
        <FontAwesomeIcon icon={ faCity } />&nbsp;&nbsp;{ city }
      </Adress>
      <Adress>
        <a href={ `tel:${phone}` }>
          <FontAwesomeIcon icon={ faPhoneSquareAlt } />
        </a>&nbsp;&nbsp;
        { phone }
      </Adress>
      <Adress>
        <a href={ `email:${email}` }>
          <FontAwesomeIcon icon={ faAt } />
        </a>&nbsp;&nbsp;
        { email }
      </Adress>
    </Container>
  )
}

export default Gym;