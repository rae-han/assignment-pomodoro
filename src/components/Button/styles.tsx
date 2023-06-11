import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;

  button {
    position: relative;
    width: 100%;
    height: 100px;
    border: none;
    outline: none;
    background-color: inherit;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      color: white;
      translate: -50% -50%;
    }
  }
`;

export const Svg = styled(motion.svg)``;
