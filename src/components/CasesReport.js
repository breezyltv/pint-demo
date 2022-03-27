import { HStack, Box, Badge } from '@chakra-ui/react';
import React from 'react';
import { nf } from '../libs/helpers';
import TitleText from './TitleText';

const CasesReport = ({ casesCovid, dosesCovid }) => {
  return (
    <HStack
      mb="3rem"
      sx={{
        '& > div.css-0': {
          marginRight: '30px',
        },
        'div.css-0 > span': {
          fontSize: '20pt',
          padding: '0 10px',
        },
      }}
    >
      <Box>
        <TitleText as="h5" size="sm" title="Infections" />
        <Badge>
          <span className="num-infect">
            {nf.format(casesCovid.latestTotals.cases['US'])}
          </span>
        </Badge>
      </Box>
      <Box>
        <TitleText as="h5" size="sm" title="New Infections" />
        <Badge colorScheme={'yellow'}>
          <span className="num-new-infect">
            {nf.format(parseInt(casesCovid.latestWeeklyAvgs.cases['US'][3]))}
          </span>
        </Badge>
      </Box>
      <Box>
        <TitleText as="h5" size="sm" title="Deaths" />
        <Badge colorScheme={'red'}>
          <span className="num-deaths">
            {nf.format(casesCovid.latestTotals.deaths['US'])}
          </span>
        </Badge>
      </Box>
      <Box>
        <TitleText as="h5" size="sm" title="Vaccination" />
        <Badge colorScheme={'green'}>
          <span className="num-vac">
            {nf.format(
              dosesCovid.totalDoses[dosesCovid.totalDoses.length - 1].count
            )}
          </span>
        </Badge>
      </Box>
    </HStack>
  );
};

export default CasesReport;
