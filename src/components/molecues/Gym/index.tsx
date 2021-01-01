import React, { FC } from 'react';
import IGym from '../../../__types__/IGym';
import { faMapMarkerAlt, faCity, faPhoneSquareAlt, faAt, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Adress, Link } from './styles';
import { EChildRoutes } from '../../../__types__/ERoutes';

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
      <Link to={ EChildRoutes.SCHEDULE }>
        <FontAwesomeIcon icon={ faClipboardList } />
      </Link>
    </Container>
  )
}

export default Gym;