import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardContainer = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  aspect-ratio: 1/1.618;
  border-radius: 16px;
  font-size: 48px;
  font-weight: bolder;
  background-color: white;
  color: #646cff;
`;
