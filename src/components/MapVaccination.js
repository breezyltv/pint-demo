import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CovidContext } from '../Provider/CovidContext';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import 'zingchart/modules-es6/zingchart-maps.min.js';
import 'zingchart/modules-es6/zingchart-maps-usa.min.js';
import { vaccineByPop } from '../libs/helpers';

const MapVaccination = () => {
  const { covidVacData } = useContext(CovidContext);
  const colorBgMode = useColorModeValue('white', '#19212D');
  const colorTextMode = useColorModeValue('#19212D', 'white');
  //console.log(covidData);

  return (
    <Box my="30px">
      <ZingChart
        id="myChart"
        data={vaccineByPop(covidVacData, colorBgMode, colorTextMode)}
      />
    </Box>
  );
};

export default MapVaccination;
