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

import { CovidContext } from './Provider/CovidContext';

const customTheme = extendTheme({
  styles: {
    global: {
      '::selection': {
        backgroundColor: '#f9c74f',
      },
    },
  },
});

const API =
  'https://salty-island-46818.herokuapp.com/https://kcmscovidtracker.blob.core.windows.net/json/state_v3/VACCINATION.json';

function App() {
  const [fetchCovidData, setFetchCovidData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'U.S. COVID-19 vaccine tracker';
    setLoading(true);
    fetch(API)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setFetchCovidData(data);
      })
      .catch(error => {
        console.error('error fetching data', error);
      })
      .finally(() => setLoading(false));
  }, []);

  //console.log(fetchCovidData);

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
        <Header covid={fetchCovidData} />
        <IntroHeader />
        <Content />
      </Container>
    </VStack>
  );

  return (
    <CovidContext.Provider value={fetchCovidData}>
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
