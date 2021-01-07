import React, { useState, useContext, useEffect } from 'react';
import { LocationContext } from '../../../../../contexts/locationContext';
import { SectionStyling } from './styles';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import LocationSwitcher from '../../../locationSwitcher';
import ICoach from '../../../../../__types__/ICoach';
import { Coaches } from '../../../../../axios/endpoints/coaches';
import CoachCard from '../../../../molecues/CoachCard';

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
      { coaches.map(data => <CoachCard { ...data } /> ) }
    </SectionWithId>
  )
}

export default CoachesSection;