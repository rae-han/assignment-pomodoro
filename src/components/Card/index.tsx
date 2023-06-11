import React from 'react';

import { CardContainer } from './styles.tsx';

const variants = {
  initial: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Card = ({ value }: { value: number }) => {
  return (
    <CardContainer variants={variants} key={value} initial="initial" animate="visible">
      {value.toString().padStart(2, '0')}
    </CardContainer>
  );
};

export default React.memo(Card);
