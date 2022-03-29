import React, { useContext, useState } from 'react';
import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { calculateMovingAvg } from '../libs/helpers';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import { CovidContext } from '../Provider/CovidContext';
import TitleText from './TitleText';

const CHART_TYPES = ['LINE', 'BAR', 'BOTH'];

const MovingAgvBar = () => {
  const { covidAllData } = useContext(CovidContext);
  const [chartType, setChartType] = useState(CHART_TYPES[2]);
  const infections = calculateMovingAvg(covidAllData.cases, 7);
  const colorBgMode = useColorModeValue('white', '#19212D');
  let chartConfig = {
    type: 'mixed',
    backgroundColor: colorBgMode,
    title: {
      text: 'New Infections',
      backgroundColor: 'none',
      color: '#818181',
      fontFamily: 'inherit',
      fontSize: '16px',
      height: '40px',
    },
    legend: {
      align: 'right',
      borderWidth: '0px',
      item: {
        fontColor: '#777',
      },
      layout: 'x2',
      marker: {
        borderRadius: '50px',
      },
      backgroundColor: 'none',
    },
    plot: {
      lineColor: '#a3be8c',
      lineWidth: '1px',
      aspect: 'spline',
      marker: {
        visible: false,
      },
      maxTrackers: 0,
      mode: 'fast',
      shadow: false,
    },
    plotarea: {
      backgroundColor: colorBgMode,
      marginBottom: '65px',
      marginLeft: '60px',
      marginRight: '55px',
      marginTop: '45px',
    },
    scaleX: {
      guide: {
        lineColor: '#c7c9c9',
        lineStyle: 'solid',
      },
      item: {
        paddingTop: '5px',
        fontColor: '#818181',
        fontSize: '10px',
      },
      label: {
        visible: false,
      },
      labels: infections.time_labels,
      lineColor: '#c7c9c9',
      lineWidth: '1px',
      maxItems: 3,
      maxLabels: 3,
      tick: {
        lineColor: '#c7c9c9',
        lineWidth: '1px',
      },
      zooming: true,
    },
    scaleY: {
      values: '0:200000:20000',
      decimals: 0,
      guide: {
        lineColor: '#c7c9c9',
        lineStyle: 'solid',
      },
      item: {
        paddingRight: '5px',
        fontColor: '#818181',
        fontSize: '10px',
      },
      lineColor: '#c7c9c9',
      lineWidth: '1px',
      refLine: {
        alpha: 0.25,
        lineColor: '#c7c9c9',
        visible: true,
      },
      shadow: false,
      tick: {
        lineColor: '#c7c9c9',
        lineWidth: '1px',
      },
    },
    scaleY2: {
      values: '0:1500000:500000',
      decimals: 0,
      guide: {
        visible: false,
      },
      item: {
        paddingRight: '5px',
        fontColor: '#818181',
        fontSize: '10px',
        offsetX: '2px',
      },
      lineColor: '#c7c9c9',
      lineWidth: '1px',
      multiplier: true,
      offsetX: '2px',
      shadow: false,
      tick: {
        lineColor: '#c7c9c9',
        lineWidth: '1px',
        offsetX: '2px',
      },
    },
    series: [
      {
        type: 'line',
        text: '7-day average',
        values: infections.moving_agv,
        decimals: 0,
        zIndex: 99999,
        visible:
          chartType === CHART_TYPES[0] || chartType === CHART_TYPES[2]
            ? true
            : false,
      },
      {
        type: 'bar',
        text: 'Infections',
        values: infections.cases,
        backgroundColor: '#63686F',
        scales: 'scale-x,scale-y-2',
        visible:
          chartType === CHART_TYPES[1] || chartType === CHART_TYPES[2]
            ? true
            : false,
      },
    ],
    crosshairX: {
      plotLabel: {
        text: '%t was %v cases<br>on %kl',
        padding: '8px',
        borderRadius: '5px',
      },
    },
    gui: {
      behaviors: [
        {
          id: 'SaveAsImage',
          enabled: 'none',
        },
        {
          id: 'Print',
          enabled: 'none',
        },
        {
          id: 'BugReport',
          enabled: 'none',
        },
        {
          id: 'FullScreen',
          enabled: 'none',
        },
        {
          id: 'ZoomIn',
          enabled: 'none',
        },
        {
          id: 'ZoomOut',
          enabled: 'none',
        },
        {
          id: 'LogScale',
          enabled: 'none',
        },
        {
          id: 'DownloadPDF',
          enabled: 'none',
        },
        {
          id: '3D',
          enabled: 'none',
        },
        {
          id: 'HideGuide',
          enabled: 'none',
        },
      ],
      contextMenu: {
        button: {
          visible: false,
        },
        gear: {
          visible: false,
        },
      },
    },
    noData: {
      text: 'Daily reported trends data from servers...',
    },
    scrollX: {
      bar: {
        backgroundColor: '#fff',
      },
      handle: {
        alpha: 0.7,
        backgroundColor: '#ccc',
        borderWidth: '0px',
        height: '5px',
      },
    },
    source: {
      text: 'Source: Reuters',
      fontColor: '#818181',
      fontFamily: 'Roboto',
      fontSize: '9px',
      y: '91%',
    },
  };

  return (
    <Box mt="3rem">
      <TitleText as="h4" size="md" title="Daily reported trends" />
      <RadioGroup onChange={setChartType} value={chartType} mb="1rem">
        <Stack direction="row" justifyContent={'center'}>
          <Radio value="LINE">7 day average</Radio>
          <Radio value="BAR">Infections</Radio>
          <Radio value="BOTH">Both</Radio>
        </Stack>
      </RadioGroup>

      <ZingChart id="myMVbarChart" data={chartConfig} />
    </Box>
  );
};

export default MovingAgvBar;
