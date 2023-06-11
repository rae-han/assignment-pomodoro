import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import { ButtonContainer, Svg } from './styles.tsx';

interface Props {
  onClick: () => void;
  isRunning: boolean;
}

const buttonVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Button = ({ onClick, isRunning }: Props) => {
  return (
    <ButtonContainer>
      <button onClick={onClick}>
        <AnimatePresence>
          {isRunning ? (
            <Svg
              key={'stop'}
              variants={buttonVariants}
              initial="initial"
              animate="visible"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </Svg>
          ) : (
            <Svg
              key={'start'}
              variants={buttonVariants}
              initial="initial"
              animate="visible"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              ></path>
            </Svg>
          )}
        </AnimatePresence>
      </button>
    </ButtonContainer>
  );
};

export default Button;
