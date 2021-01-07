import React, { useState, useContext, useEffect } from 'react';
import { LocationContext } from '../../../../../contexts/locationContext';
import { SectionStyling } from './styles';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import LocationSwitcher from '../../../locationSwitcher';
import ICoach from '../../../../../__types__/ICoach';
import { Coaches } from '../../../../../axios/endpoints/coaches';

const CoachesSection = () => {

  const { gymId } = useContext(LocationContext);
  const [coaches, setCoaches] = useState<ICoach[]>([]);

  useEffect(() => {
    (async () => {
      const newCoaches = await Coaches.getAllByLocation(gymId);
      
      setCoaches(() => newCoaches.data);
    })()
  }, [gymId]);

  return (
    <SectionWithId id={ ESectionIds.INDIVIDUAL_PROGRAM_COACHES } styling={ SectionStyling }>
      <LocationSwitcher />
      {
        coaches.map(({ first_name, last_name, specializations, email }) => 
          <>
            <h3>{ `${first_name} ${last_name}` }</h3>
            <p>{ `Specialization: ${specializations}` }</p>
            <p>{ `Email adress: ${email}` }</p>
          </>
        )
      }
    </SectionWithId>
  )
}

export default CoachesSection;