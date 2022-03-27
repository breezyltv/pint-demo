import { HStack, VStack, Text, Code } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../components/Logo';

const Header = ({ covid }) => {
  return (
    <HStack justifyContent="flex-start" mb="40px">
      <Logo h="10vmin" pointerEvents="none" />
      <VStack alignItems="flex-start">
        <Text fontSize="4xl" fontWeight={'500'}>
          U.S. COVID-19 tracker
        </Text>
        <Text>
          <Code fontSize="xl">
            Updated: {covid && covid.last_update_date_str}{' '}
          </Code>
        </Text>
      </VStack>
    </HStack>
  );
};

export default Header;
