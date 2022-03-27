import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CovidContext } from '../Provider/CovidContext';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import { vaccineRateByAge } from '../libs/helpers';

function VaccineRateByAge() {
  const covidData = useContext(CovidContext);
  const colorBgMode = useColorModeValue('white', '#19212D');
  const colorBgBarMode = useColorModeValue('#E3ECF6', '#364456');
  const colorTextMode = useColorModeValue('#19212D', 'hsla(0,0%,100%,.75)');
  let chartConfig = {
    type: 'hbar',
    title: {
      text: 'Percentage of the U.S. population vaccinated',
      backgroundColor: 'none',
      fontColor: colorTextMode,
      fontFamily: 'Arial',
      fontSize: '18px',
    },
    backgroundColor: colorBgMode,
    plot: {
      animation: {
        delay: 300,
        effect: 'ANIMATION_EXPAND_TOP',
        method: 'ANIMATION_LINEAR',
        sequence: 'ANIMATION_BY_PLOT_AND_NODE',
        speed: '500',
      },
      barsOverlap: '100%',
      borderRadius: '8px',
      hoverState: {
        visible: false,
      },
    },
    plotarea: {
      margin: '60px 20px 20px 80px',
    },
    scaleX: {
      values: [
        '75+',
        '65-74',
        '50-64',
        '40-49',
        '25-39',
        '18-24',
        '12-17',
        '5-11',
      ],
      guide: {
        visible: false,
      },
      item: {
        autoAlign: true,
        fontSize: '14px',
        fontWeight: 'bold',
        lineColor: 'none',
        paddingRight: '20px',
      },
      tick: {
        visible: false,
      },
    },
    scaleY: {
      guide: {
        visible: false,
      },
      visible: false,
    },
    labels: [
      {
        text: 'Age',
        fontColor: colorTextMode,
        fontSize: '14px',
        fontWeight: 'bold',
        x: '2%',
        y: '9%',
      },
      {
        text: 'Fully vaccinated',
        fontColor: colorTextMode,
        fontSize: '14px',
        fontWeight: 'bold',
        x: '20%',
        y: '9%',
      },
    ],

    series: [
      {
        values: vaccineRateByAge(covidData).totalValues,
        tooltip: {
          visible: false,
        },
        backgroundColor: colorBgBarMode,
        barWidth: '40px',
        borderColor: '#e8e3e3',
        borderWidth: '1px',
        fillAngle: 90,
      },
      {
        values: vaccineRateByAge(covidData).values,
        backgroundColor: '#a3be8c',
        valueBox: {
          text: '%v',
          alpha: 0.6,
          decimals: 0,
          fontColor: colorTextMode,
          fontSize: '14px',
          placement: 'top-out',
        },
        barWidth: '36px',
        maxTrackers: 0,
      },
    ],
  };
  return (
    <Box mt="3rem">
      <ZingChart id="myHbarChart" data={chartConfig} />
    </Box>
  );
}

export default VaccineRateByAge;
