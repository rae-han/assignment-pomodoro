import React from 'react';

import { Title } from './styles.tsx';

const TitleComp = ({ text = 'Pomodoro' }) => {
  return <Title>{text}</Title>;
};

export default TitleComp;
