import React, { useContext } from 'react';
import { TimerContext } from '../../../../contexts/timerContext';
import { StatusContainer, TimeContainerContainer } from './styles';
import TimerTemplate from '../../../../templates/timer';
import TimerButton from '../../../molecues/TimerButton';
import TimeContainer from '../../../molecues/TimeContainer';
import ProgressBar from '../../../molecues/ProgressBar';
import { faPause, faCogs, faPlay } from '@fortawesome/free-solid-svg-icons';

const TrainingView = () => {

  const { setIsRunning, isRunning, setRunningStatus, currentRound, runningStatus, roundsAmmount, currentTime, roundLength, restLength } = useContext(TimerContext);

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
        { runningStatus && <p>{ runningStatus }</p> }
        <p>{ `Round: ${currentRound}/${roundsAmmount}` }</p>
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