import { useContext, useEffect, useRef } from 'react';
import { TimerContext } from '../../../contexts/timerContext'

const Timer = () => {

  const context = useContext(TimerContext);
  const interval = useRef<number>(0);

  useEffect(() => { 
    if (context.isRunning) {
      interval.current = setInterval(() => {
        context.setCurrentTime(previous => previous - 1);
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  }, [context.isRunning]);

  useEffect(() => {
    if (context.currentTime === 0 && context.isRunning) {
      context.setRunningStatus(previous => previous === 'REST' ? 'WORK' : 'REST');
    }
  }, [context.currentTime]);

  useEffect(() => {
    if (context.runningStatus === 'WORK') {

      context.setCurrentRound(state => state + 1);
      context.setCurrentTime(() => context.roundLength);

    } else if (context.runningStatus === 'REST') {

      if (context.currentRound === context.roundsAmmount) { 
        context.setRunningStatus(() => null);
      } else {
        context.setCurrentTime(() => context.restLength);
      }
    } else {
      context.setCurrentRound(() => 0);
      context.setIsRunning(() => false);
    }
  }, [context.runningStatus]);

  useEffect(() => {
    if (context.warningTime !== Math.min(context.roundLength, context.restLength, context.warningTime)) {
      context.setWarningTime(() => Math.min(context.restLength, context.roundLength));
    }
  }, [context.roundLength, context.restLength]);

  return (
    <></>
  )
}

export default Timer;