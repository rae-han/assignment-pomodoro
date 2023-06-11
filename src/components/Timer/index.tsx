import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { minuteSelector, secondSelector, timerIdState, timerState, timerStatusState } from '../../store/atom.ts';
import Card from '../Card';
import { TimerContainer } from './styles.tsx';

const Timer = () => {
  const seconds = useRecoilValue(secondSelector);
  const minutes = useRecoilValue(minuteSelector);

  return (
    <TimerContainer>
      <Card value={minutes} />
      <span>:</span>
      <Card value={seconds} />
    </TimerContainer>
  );
};

export default Timer;
