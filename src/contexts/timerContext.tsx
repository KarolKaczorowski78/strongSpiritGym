import { createContext, FC, ReactNode, useState } from 'react';
import ITimerContext, { TRunningStatus } from '../__types__/ITimerContext';

export const defaultValue: ITimerContext = {
  roundLength: 180,
  restLength: 60,
  roundsAmmount: 3,
  warningTime: 5,
  runningStatus: null,
  isRunning: false,
  currentTime: 0,
  currentRound: 0,
  isStopped: false,
  setRoundLength: () => {  },
  setRestLength: () => {  },
  setRoundsAmmount: () => {  },
  setWarningTime: () => {  },
  setIsRunning: () => {  }, 
  setRunningStatus: () => {  },
  setCurrentTime: () => {  },
  setIsStopped: () => {  },
  setCurrentRound: () => {  },
}

export const TimerContext = createContext(defaultValue);


export const TimerProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [roundLength, setRoundLength] = useState<number>(defaultValue.roundLength);
  const [restLength, setRestLength] = useState<number>(defaultValue.restLength);
  const [roundsAmmount, setRoundsAmmount] = useState<number>(defaultValue.roundsAmmount);
  const [warningTime, setWarningTime] = useState<number>(defaultValue.warningTime);
  const [runningStatus, setRunningStatus] = useState<TRunningStatus>(defaultValue.runningStatus);
  const [isRunning, setIsRunning] = useState<boolean>(defaultValue.isRunning);
  const [currentTime, setCurrentTime] = useState<number>(defaultValue.currentTime);
  const [isStopped, setIsStopped] = useState<boolean>(defaultValue.isStopped);
  const [currentRound, setCurrentRound] = useState<number>(defaultValue.currentRound);

  const providerValue: ITimerContext = {
    roundLength: roundLength,
    restLength: restLength,
    roundsAmmount: roundsAmmount,
    warningTime: warningTime,
    runningStatus: runningStatus,
    isRunning: isRunning,
    currentTime: currentTime,
    isStopped: isStopped,
    currentRound: currentRound,
    setRoundLength: setRoundLength,
    setRestLength: setRestLength,
    setRoundsAmmount: setRoundsAmmount,
    setWarningTime: setWarningTime,
    setIsRunning: setIsRunning, 
    setRunningStatus: setRunningStatus,
    setCurrentTime: setCurrentTime,
    setIsStopped: setIsStopped,
    setCurrentRound: setCurrentRound,
  }

  return (
    <TimerContext.Provider value={ providerValue }>
      { children }
    </TimerContext.Provider>
  )
}