import React from 'react';

import Card from '../Card';
import { ClockContainer } from './styles.tsx';

const Clock = () => {
  return (
    <ClockContainer>
      <Card value={1} />
      <span>:</span>
      <Card value={2} />
    </ClockContainer>
  );
};

export default Clock;
