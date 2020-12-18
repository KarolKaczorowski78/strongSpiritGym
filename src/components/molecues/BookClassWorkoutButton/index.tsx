import React, { FC } from 'react';
import { Button } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const BookClassWorkoutButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={ faUserEdit } />  
    </Button>
  )
}

export default BookClassWorkoutButton;