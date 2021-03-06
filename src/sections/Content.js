import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AboutData from '../components/AboutData';
import MapVaccination from '../components/MapVaccination';
import MovingAgvBar from '../components/MovingAvgBar';
import TableVaccination from '../components/TableVaccination';
import TitleText from '../components/TitleText';
import IntroHeader from '../components/IntroHeader';
import VaccineRateByAge from '../components/VaccineRateByAge';
import { CovidContext } from '../Provider/CovidContext';
const Content = () => {
  const { covidVacData, covidAllData } = useContext(CovidContext);
  return (
    <Box
      sx={{
        '& > div': {
          marginBottom: '4rem',
        },
      }}
    >
      {covidAllData && <MovingAgvBar />}
      <IntroHeader />
      <Box>
        <TitleText as="h4" size="md" title="COVID-19 vaccine rates by state" />
        <Text>
          How many people are vaccinated in each state? This map shows the
          percentage of each state’s population who are fully vaccinated or had
          at least one dose of the COVID-19 vaccine.
        </Text>
        <MapVaccination />
        <TableVaccination />
      </Box>
      <Box>
        <TitleText
          as="h4"
          size="md"
          title="U.S. COVID-19 vaccine rates by age"
        />
        <Text>
          This chart shows the percentage of the U.S. population that has
          received a vaccination, broken down by age. Kids 5 and older can get
          the vaccine in the U.S.
        </Text>
        {covidVacData && <VaccineRateByAge />}
      </Box>
      <AboutData />
    </Box>
  );
};

export default Content;
