import { atom, selector } from 'recoil';

const _MINUTE = 60;

export const timerStatusState = atom({
  key: 'timerStatus',
  default: 'stop',
});

export const timerIdState = atom({
  key: 'timerId',
  default: 0,
});

export const timerState = atom<number>({
  key: 'timer',
  default: 25 * _MINUTE,
});

export const secondSelector = selector<number>({
  key: 'seconds',
  get: ({ get }) => {
    const time = get(timerState);
    return time % _MINUTE;
  },
});

export const minuteSelector = selector<number>({
  key: 'minutes',
  get: ({ get }) => {
    const time = get(timerState);
    return Math.floor(time / _MINUTE);
  },
});

export const roundsState = atom<number>({
  key: 'rounds',
  default: 0,
});

export const roundSelector = selector<number>({
  key: 'round',
  get: ({ get }) => {
    const rounds = get(roundsState);
    return rounds % 4;
  },
});

export const goalSelector = selector<number>({
  key: 'goal',
  get: ({ get }) => {
    const rounds = get(roundsState);
    return Math.floor(rounds / 4);
  },
});
