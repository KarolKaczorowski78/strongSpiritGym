import { Dispatch, SetStateAction } from "react";

export type TRunningStatus = 'WORK' | 'REST' | null;

export default interface ITimerContext {
  roundLength: number,
  restLength: number,
  roundsAmmount: number,
  warningTime: number,
  runningStatus: TRunningStatus,
  isRunning: boolean,
  currentTime: number,
  currentRound: number,
  isStopped: boolean,
  setRoundLength: Dispatch<SetStateAction<number>>,
  setRestLength: Dispatch<SetStateAction<number>>,
  setRoundsAmmount: Dispatch<SetStateAction<number>>,
  setWarningTime: Dispatch<SetStateAction<number>>,
  setIsRunning: Dispatch<SetStateAction<boolean>>,
  setRunningStatus: Dispatch<SetStateAction<TRunningStatus>>,
  setCurrentTime: Dispatch<SetStateAction<number>>,
  setIsStopped: Dispatch<SetStateAction<boolean>>,
  setCurrentRound: Dispatch<SetStateAction<number>>,
}