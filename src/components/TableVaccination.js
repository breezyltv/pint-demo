import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ZingGrid from 'zinggrid';
import { vaccineByPopTable } from '../libs/helpers';
import { CovidContext } from '../Provider/CovidContext';
const TableVaccination = () => {
  const covidData = useContext(CovidContext);
  const colorBgMode = useColorModeValue('white', '#19212D');
  const colorTextMode = useColorModeValue('#19212D', 'white');
  const colorHeadMode = useColorModeValue('#E3ECF6', '#364456');
  //console.log(vaccineByPopTable(covidData));

  return (
    <Box
      mt="5rem"
      sx={{
        'zing-grid': {
          '--theme-color-primary': '#a3be8c',
          color: colorTextMode,
        },
        '#table-cap': {
          background: '#a3be8c',
          color: '#19212D',
        },
        'zg-control-bar': {
          '--zg-control-bar-background': colorHeadMode,
        },
        'zg-head-cell': {
          'font-weight': 'bold',
          background: colorHeadMode,
        },

        'zg-body, zg-row': {
          background: colorBgMode,
        },
        'zg-cell': {
          borderBottom: '1px solid #eeeeee',
        },
        'zg-pager': {
          borderTop: 'none',
          color: colorTextMode,
          background: colorBgMode,
        },
        'zg-input, zg-select': {
          color: '#19212D',
        },
        'zg-watermark': {
          '--zg-watermark-background': colorBgMode,
          '--zg-watermark-color': colorTextMode,
        },
      }}
    >
      <zing-grid
        id="table-vaccine"
        sort
        layout="row"
        pager
        page-size="6"
        page-size-options="3,6,9"
        data={JSON.stringify(vaccineByPopTable(covidData))}
        loading
      >
        <zg-caption id="table-cap">
          <Text>View COVID-19 vaccines by state as table</Text>
        </zg-caption>
      </zing-grid>
    </Box>
  );
};

export default TableVaccination;
