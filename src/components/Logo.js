import React from 'react';
import {
  Image,
  keyframes,
  usePrefersReducedMotion,
  Box,
} from '@chakra-ui/react';
import logo from './assets/earth.png';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <Box bg="#19212D" borderRadius="50%">
      <Image animation={animation} src={logo} {...props} />
    </Box>
  );
};
