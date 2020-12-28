import React, { FC } from 'react';
import { Button, Container, Input } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CityFinder: FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <Container>
      <Input type="text" placeholder={ placeholder } />
      <Button>
        <FontAwesomeIcon icon={ faSearch } />
      </Button>
    </Container>
  )
}

export default CityFinder