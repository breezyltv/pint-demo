import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const colorTextMode = useColorModeValue('#444', 'hsla(0,0%,100%,.75)');
  return (
    <Box borderTop={'1px solid #444'} color={colorTextMode}>
      <Box textAlign={'center'} paddingTop="25px">
        <Text fontSize={'lg'} fontWeight="500">
          Data sources
        </Text>
        <Text fontSize={'sm'}>
          Local state agencies, local media,{' '}
          <Link
            href="https://www.bsg.ox.ac.uk/research/research-projects/coronavirus-government-response-tracker"
            isExternal
          >
            Oxford Coronavirus Government Response Tracker
          </Link>
          , Our World in Data, The World Bank, Reuters research, Mayo Clinic
        </Text>
      </Box>
      <Box textAlign={'center'} paddingTop="25px">
        <Text fontSize={'lg'} fontWeight="500">
          Design and development
        </Text>
        <Text fontSize={'sm'}>Vu Le, San Diego CA 92131.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
