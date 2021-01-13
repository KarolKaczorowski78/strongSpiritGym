import React, { FC } from 'react';
import { Bar, Progress } from './styles';

const ProgressBar: FC<{ max: number, curr: number }> = ({ max, curr }) => {
  return (
    <Bar>
      <Progress  widthPercent={ (curr / max) * 100 } />
    </Bar>
  )
}

export default ProgressBar;