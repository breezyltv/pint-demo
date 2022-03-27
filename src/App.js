import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Container,
  Spinner,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { extendTheme } from '@chakra-ui/react';
import Header from './sections/Header';
import IntroHeader from './components/IntroHeader';
import Content from './sections/Content';
import Footer from './sections/Footer';
import { CovidContext } from './Provider/CovidContext';
import CasesReport from './components/CasesReport';

const customTheme = extendTheme({
  styles: {
    global: {
      '::selection': {
        backgroundColor: '#a3be8c',
      },
    },
  },
});

const VAC_API =
  'https://salty-island-46818.herokuapp.com/https://kcmscovidtracker.blob.core.windows.net/json/state_v3/VACCINATION.json';
const CASES_API =
  'https://salty-island-46818.herokuapp.com/https://graphics.thomsonreuters.com/data/2020/coronavirus/global-tracker/statistics.json';

const DOSES_API =
  'https://salty-island-46818.herokuapp.com/https://graphics.thomsonreuters.com/data/2020/coronavirus/owid-covid-vaccinations/countries/united-states/data.json';

function App() {
  const [covidVacData, setCovidVacData] = useState();
  const [covidCasesData, setCovidCasesData] = useState();
  const [covidDosesData, setCovidDosesData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'U.S. COVID-19 tracker';
    setLoading(true);
    fetch(VAC_API)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setCovidVacData(data);
      })
      .catch(error => {
        console.error('error fetching data', error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(CASES_API)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setCovidCasesData(data);
      })
      .catch(error => {
        console.error('error fetching data', error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(DOSES_API)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setCovidDosesData(data);
      })
      .catch(error => {
        console.error('error fetching data', error);
      })
      .finally(() => setLoading(false));
  }, []);

  //console.log(covidCasesData);

  const loadingCPN = (
    <Box textAlign={'center'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text my="30px">fetching data...</Text>
    </Box>
  );

  const contentCPN = (
    <VStack>
      <Container maxW="container.lg" fontSize={'lg'}>
        <Header covid={covidVacData} />
        {covidCasesData && covidDosesData && (
          <CasesReport
            casesCovid={covidCasesData}
            dosesCovid={covidDosesData}
          />
        )}
        <IntroHeader />
        <Content />
        <Footer />
      </Container>
    </VStack>
  );

  return (
    <CovidContext.Provider value={covidVacData}>
      <ChakraProvider theme={customTheme}>
        <Box>
          <Grid minH={loading ? '100vh' : 0} p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            {loading ? loadingCPN : contentCPN}
          </Grid>
        </Box>
      </ChakraProvider>
    </CovidContext.Provider>
  );
}

export default App;
