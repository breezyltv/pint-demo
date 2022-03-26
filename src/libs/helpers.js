const nf = Intl.NumberFormat();

export const colorGradient = [
  '#d8f3dc',
  '#b7e4c7',
  '#95d5b2',
  '#74c69d',
  '#2d6a4f',
  '#1b4332',
];

export const colorAndGroupId = value => {
  switch (true) {
    case value < 45:
      return 0;
    case value >= 45 && value < 50:
      return 1;
    case value >= 50 && value < 55:
      return 2;
    case value >= 55 && value < 60:
      return 3;
    case value >= 60 && value < 65:
      return 4;
    case value >= 65:
      return 5;
    default:
      return 0;
  }
};

export const vaccineByPop = (covidData, colorBgMode, colorTextMode) => {
  if (!covidData) return null;
  const stateResults = {};
  const state_vac = covidData.state_vaccination;
  Object.keys(state_vac).forEach(stateKey => {
    const colorIdx = colorAndGroupId(
      state_vac[stateKey].percent_fully_vaccinated
    );
    const styleObjectState = {
      backgroundColor: colorGradient[colorIdx],
      group: colorIdx,
      label: {
        fontSize: '14px',
        fontFamily: 'inherit',
      },
      tooltip: {
        text: `<b>${state_vac[stateKey].stateName}</b>
         Fully Vaccinated: ${state_vac[stateKey].percent_fully_vaccinated}%
         At Least One Dose: ${
           state_vac[stateKey].percent_with_at_least_one_dose
         }%
         State Population: ${nf.format(state_vac[stateKey].state_pop)}
        `,
        fontSize: '14px',
        fontFamily: 'inherit',
        textAlign: 'left',
        width: '220px',
        wrapText: true,
      },
    };
    stateResults[stateKey] = styleObjectState;
  });

  return {
    backgroundColor: colorBgMode,
    gui: {
      watermark: {
        position: 'tr',
      },
    },
    globals: {
      fontFamily: 'inherit',
      shadow: false,
      color: colorTextMode,
    },
    labels: [
      {
        text: 'Percentage of state population vaccinated',
        fontSize: '14px',
        paddingTop: '40px',
        y: '420px',
        x: '710px',
      },
    ],
    legend: {
      backgroundColor: 'none',
      borderWidth: 0,
      offsetY: '-10px',
      toggleAction: 'none',
      verticalAlign: 'bottom',
      item: {
        color: colorTextMode,
        fontSize: '16px',
      },
      marker: {
        type: 'rectangle',
        width: '20px',
        height: '10px',
      },
    },
    series: [
      // render legend items
      {
        legendItem: {
          text: '< 45%',
        },
        legendMarker: {
          backgroundColor: colorGradient[0],
        },
      },
      {
        legendItem: {
          text: '55%',
        },
        legendMarker: {
          backgroundColor: colorGradient[1],
        },
      },
      {
        legendItem: {
          text: '60%',
        },
        legendMarker: {
          backgroundColor: colorGradient[2],
        },
      },
      {
        legendItem: {
          text: '65%',
        },
        legendMarker: {
          backgroundColor: colorGradient[3],
        },
      },
      {
        legendItem: {
          text: '> 65%',
        },
        legendMarker: {
          backgroundColor: colorGradient[4],
        },
      },
    ],
    shapes: [
      // render map
      {
        type: 'zingchart.maps',
        options: {
          id: 'map',
          name: 'usa',
          scale: true,
          y: '40px',
          style: {
            borderColor: '#FFF',
            items: stateResults,
            hoverState: {
              alpha: 0.3,
              backgroundColor: '#FFF',
              borderWidth: '3px',
            },
          },
        },
      },
    ],
  };
};

export const vaccineByPopTable = covidData => {
  if (!covidData) return null;
  const stateResults = [];
  const state_vac = covidData.state_vaccination;
  Object.keys(state_vac).forEach(stateKey => {
    stateResults.push({
      location: state_vac[stateKey].stateName,
      fully_vaccinated: state_vac[stateKey].percent_fully_vaccinated + '%',
      at_least_one_dose:
        state_vac[stateKey].percent_with_at_least_one_dose + '%',
      population: state_vac[stateKey].state_pop,
    });
  });
  return stateResults;
};
