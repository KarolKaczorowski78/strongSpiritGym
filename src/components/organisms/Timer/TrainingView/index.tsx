import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../../contexts/primitivesContext';
import { TimerContext } from '../../../../contexts/timerContext';
import { StatusContainer, TimeContainerContainer } from './styles';
import TimerTemplate from '../../../../templates/timer';
import TimerButton from '../../../molecues/TimerButton';
import TimeContainer from '../../../molecues/TimeContainer';
import ProgressBar from '../../../molecues/ProgressBar';
import { faPause, faCogs, faPlay } from '@fortawesome/free-solid-svg-icons';

const TrainingView = () => {

  const { setIsRunning, isRunning, setRunningStatus, currentRound, runningStatus, roundsAmmount, currentTime, roundLength, restLength } = useContext(TimerContext);
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <TimerTemplate
      buttons={ 
        <>
          { !isRunning && 
            <TimerButton 
              icon={ faCogs } 
              action={ () => { 
                setRunningStatus(() => null);
              }} 
            /> 
          }
          <TimerButton 
            icon={ isRunning ? faPause : faPlay } 
            action={ () => { 
              setIsRunning(previous => !previous) } 
            } 
          />
        </> 
      }
    >
      <StatusContainer>
        { runningStatus && <p>{ runningStatus && (runningStatus === 'WORK' ? isEnglish ? 'Work' : 'Praca' : isEnglish ? 'Rest' : 'Odpoczynek') }</p> }
        <p>{ `${isEnglish ? 'Round' : 'Runda'}: ${currentRound}/${roundsAmmount}` }</p>
      </StatusContainer>
      <TimeContainerContainer>
        <TimeContainer fontSizeRem={ 4 } />
        <ProgressBar 
          max={ runningStatus ? (runningStatus === 'WORK' ? roundLength : restLength) : 0 } 
          curr={ currentTime } />
      </TimeContainerContainer>
    </TimerTemplate>
  )
}

export default TrainingView;