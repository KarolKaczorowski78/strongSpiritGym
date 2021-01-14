import React, { useContext } from 'react';
import { TimerContext } from '../../../../contexts/timerContext';
import { PrimitivesContext } from '../../../../contexts/primitivesContext';
import TimerTemplate from '../../../../templates/timer';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import TimerButton from '../../../molecues/TimerButton';
import TimerSetter from '../../../molecues/TimerSetter';
import { Timer } from '../../../../websiteTextContent/Timer';
import { toTimerFormat } from '../../../../universal/toTimerFormat'

const SettingView = () => {
  const context = useContext(TimerContext);
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

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
        content={ Timer.setters[0][isEnglish ? 'eng' : 'pl'] }
        state={ toTimerFormat(context.roundLength) }
        setState={ context.setRoundLength }
        setStateValue={ 5 }
        maxStateValue={ 3600 }
      />
      <TimerSetter 
        content={ Timer.setters[1][isEnglish ? 'eng' : 'pl'] }
        state={ toTimerFormat(context.restLength) }
        setState={ context.setRestLength }
        setStateValue={ 5 }
        maxStateValue={ 3600 }
      />
      <TimerSetter 
        content={ Timer.setters[2][isEnglish ? 'eng' : 'pl'] }
        state={ toTimerFormat(context.warningTime) }
        setState={ context.setWarningTime }
        setStateValue={ 5 }
        maxStateValue={ Math.min(context.roundLength, context.restLength) }
      />
      <TimerSetter 
        content={ Timer.setters[3][isEnglish ? 'eng' : 'pl'] }
        state={ context.roundsAmmount.toString() }
        setState={ context.setRoundsAmmount }
        setStateValue={ 1 }
        maxStateValue={ 60 }
      />
    </TimerTemplate>
  )
}

export default SettingView;