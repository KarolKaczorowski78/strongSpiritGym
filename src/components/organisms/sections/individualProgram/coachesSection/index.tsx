import React, { useState, useContext, useEffect, FC } from 'react';
import { LocationContext } from '../../../../../contexts/locationContext';
import { SectionStyling, H2 } from './styles';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import LocationSwitcher from '../../../locationSwitcher';
import ICoach from '../../../../../__types__/ICoach';
import { Coaches } from '../../../../../axios/endpoints/coaches';
import CoachCard from '../../../../molecues/CoachCard';
import P from '../../../../atoms/p';

const CoachesSection: FC<{ headling: string, p: string }> = ({ headling, p }) => {

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
      <H2>{ headling }</H2>
      <P>{ p }</P>
      <LocationSwitcher />
      { coaches.map(data => <CoachCard { ...data } /> ) }
    </SectionWithId>
  )
}

export default CoachesSection;