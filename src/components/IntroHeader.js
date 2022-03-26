import { Code, Text } from '@chakra-ui/react';
import React from 'react';

const IntroHeader = () => {
  return (
    <Text>
      The U.S. vaccine rollout isn’t over. See how many people are vaccinated
      and compare progress across states.{' '}
      <Code fontSize={'md'}>Mayo Clinic</Code> experts recommend getting fully
      vaccinated against COVID-19.
    </Text>
  );
};

export default IntroHeader;
