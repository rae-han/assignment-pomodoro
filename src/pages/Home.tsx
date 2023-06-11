import '../styles/home.scss';

import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Button from '../components/Button';
import Target from '../components/Target';
import Timer from '../components/Timer';
import Title from '../components/Title';
import { roundsState, timerState, timerStatusState } from '../store/atom.ts';

const Home = () => {
  const [seconds, setSeconds] = useRecoilState(timerState);
  const [rounds, setRounds] = useRecoilState(roundsState);
  const [timerStatus, setTimerStatus] = useRecoilState(timerStatusState);
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef<number>();

  const onClick = () => {
    if (rounds === 4 * 12) {
      return;
    }
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    timer.current = setInterval(() => {
      if (seconds === 0) {
        setIsRunning(false);
        setSeconds(25 * 60);
        setRounds((prev) => prev + 1);
        return;
      }

      setSeconds((prev) => prev - 1);

      // setSeconds((prev) => {
      //   if (prev === 0) {
      //     setIsRunning(false);
      //     return 25 * 60;
      //   }
      //
      //   return prev - 1;
      // });
    }, 999);

    return () => {
      clearInterval(timer.current);
    };
  }, [isRunning, seconds, setRounds, setSeconds, timer, timerStatus]);

  return (
    <main className="HomePageContainer">
      <Title text="Pomodoro" />
      <Timer />
      <Button onClick={onClick} isRunning={isRunning}></Button>
      <Target />
    </main>
  );
};

export default Home;
