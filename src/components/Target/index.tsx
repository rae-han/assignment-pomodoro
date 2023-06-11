import React from 'react';
import { useRecoilValue } from 'recoil';

import { goalSelector, roundSelector } from '../../store/atom.ts';
import { TargetContainer } from './styles.tsx';

const Target = () => {
  const round = useRecoilValue(roundSelector);
  const goal = useRecoilValue(goalSelector);

  return (
    <TargetContainer>
      <div className="Target__wrap">
        <div className="Target__value">
          <span>{round}</span> / 4
        </div>
        <div className="Target__text">Round</div>
      </div>
      <div className="Target__wrap">
        <div className="Target__value">
          <span>{goal}</span> / 12
        </div>
        <div className="Target__text">Goal</div>
      </div>
    </TargetContainer>
  );
};

export default Target;
