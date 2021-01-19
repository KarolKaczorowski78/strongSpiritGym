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
import Div from '../../../../atoms/div';
import SwitchButton from '../../../../molecues/SwitchButton/FancySwitchButton';
import { useLocation } from 'react-router-dom';
import LoadingComponent from '../../../../molecues/Loading';

const CoachesSection: FC<{ headling: string, p: string, button: string }> = ({ headling, p, button }) => {

  const { pathname } = useLocation();
  const { gymId } = useContext(LocationContext);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [coaches, setCoaches] = useState<ICoach[]>([]);
  const [showOnlyProgramCoaches, setShowOnlyProgramCoaches] = useState<boolean>(false);

  useEffect(() => {
    setIsPending(() => true);
    (async () => {
      const newCoaches = await Coaches.getAllByLocation(gymId);
      
      setCoaches(() => newCoaches.data);
      setIsPending(() => false);
    })()
  }, [gymId]);

  return (
    <SectionWithId id={ ESectionIds.INDIVIDUAL_PROGRAM_COACHES } styling={ SectionStyling }>
      <H2>{ headling }</H2>
      <P>{ p }</P>
      <LocationSwitcher />
      <SwitchButton 
        state={ showOnlyProgramCoaches } 
        setState={ setShowOnlyProgramCoaches }
        content={ button } 
      />
      <Div>
        { 
          !isPending ? coaches.map(coach => {
            if (showOnlyProgramCoaches) {
              return pathname.includes(coach.specializations) ? <CoachCard key={ coach.id } { ...coach } /> : <></>
            } else {
              return <CoachCard key={ coach.id } { ...coach } />
            }
          }) : <LoadingComponent />
        }
      </Div>
    </SectionWithId>
  )
}

export default CoachesSection;