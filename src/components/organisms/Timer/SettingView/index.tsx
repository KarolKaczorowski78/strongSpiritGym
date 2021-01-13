import React, { useContext } from 'react';
import { TimerContext } from '../../../../contexts/timerContext';
import TimerTemplate from '../../../../templates/timer';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import TimerButton from '../../../molecues/TimerButton';
import TimerSetter from '../../../molecues/TimerSetter';
import { toTimerFormat } from '../../../../universal/toTimerFormat'

const SettingView = () => {
  const context = useContext(TimerContext);

  return (
    <TimerTemplate
      buttons={
        <TimerButton 
          icon={ faPlay } 
          action={ () => { 
            context.setRunningStatus(() => 'WORK');
            context.setIsRunning(() => true);
          } } /> 
      }
    >
      <TimerSetter 
        content="Round time"
        state={ toTimerFormat(context.roundLength) }
        setState={ context.setRoundLength }
        setStateValue={ 5 }
        maxStateValue={ 3600 }
      />
      <TimerSetter 
        content="Rest time"
        state={ toTimerFormat(context.restLength) }
        setState={ context.setRestLength }
        setStateValue={ 5 }
        maxStateValue={ 3600 }
      />
      <TimerSetter 
        content="Warn time"
        state={ toTimerFormat(context.warningTime) }
        setState={ context.setWarningTime }
        setStateValue={ 5 }
        maxStateValue={ Math.min(context.roundLength, context.restLength) }
      />
      <TimerSetter 
        content="Rounds"
        state={ context.roundsAmmount.toString() }
        setState={ context.setRoundsAmmount }
        setStateValue={ 1 }
        maxStateValue={ 60 }
      />
    </TimerTemplate>
  )
}

export default SettingView;