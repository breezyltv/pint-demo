import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import MapVaccination from '../components/MapVaccination';
import TitleText from '../components/TitleText';

const Content = () => {
  return (
    <Box>
      <Box>
        <TitleText as="h4" size="md" title="COVID-19 vaccine rates by state" />
        <Text>
          How many people are vaccinated in each state? This map shows the
          percentage of each state’s population who are fully vaccinated or had
          at least one dose of the COVID-19 vaccine.
        </Text>
        <MapVaccination />
      </Box>
    </Box>
  );
};

export default Content;
