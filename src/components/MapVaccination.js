import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CovidContext } from '../Provider/CovidContext';
const MapVaccination = () => {
  const covidData = useContext(CovidContext);
  console.log(covidData);
  return <Box>this is Map</Box>;
};

export default MapVaccination;
