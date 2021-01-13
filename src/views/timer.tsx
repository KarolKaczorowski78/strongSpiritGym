import React, { useContext } from 'react';
import Page from '../templates/page';
import { TimerContext } from '../contexts/timerContext';
import SettingView from '../components/organisms/Timer/SettingView';
import TrainingView from '../components/organisms/Timer/TrainingView';

export default function Timer() {
  
  const { runningStatus } = useContext(TimerContext);

  return (
    <Page>
      { runningStatus ? <TrainingView /> : <SettingView /> }
    </Page>
  )
}