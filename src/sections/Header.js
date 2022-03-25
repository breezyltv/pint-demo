import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../components/Logo';

const Header = ({ covid }) => {
  return (
    <HStack justifyContent="flex-start" mb="30px">
      <Logo h="10vmin" pointerEvents="none" />
      <VStack alignItems="flex-start">
        <Text fontSize="4xl">U.S. COVID-19 vaccine tracker</Text>
        <Text fontSize="2xl">
          Updated: {covid && covid.last_update_date_str}
        </Text>
      </VStack>
    </HStack>
  );
};

export default Header;
