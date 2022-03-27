import { InfoIcon } from '@chakra-ui/icons';
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import TitleText from './TitleText';

const AboutData = () => {
  const colorBgMode = useColorModeValue('white', '#323943');
  const colorBorderMode = useColorModeValue('#eee', 'hsla(0,0%,100%,.25)');
  return (
    <Box
      border={'1px solid ' + colorBorderMode}
      borderRadius="4px"
      p="18px 28px"
      bg={colorBgMode}
      fontSize={'md'}
      fontWeight="300"
    >
      <HStack mb="1rem">
        <InfoIcon />
        <TitleText as="h5" size="md" title="About this data" />
      </HStack>
      <Text>
        Vaccine progress is updated daily. Data is compiled from the Centers for
        Disease Control and Prevention. We also use historical data from The
        COVID Tracking Project. State population data is from the 2019 census
        estimates from the United States Census Bureau.
      </Text>
      <br />
      <Text>
        On April 26, the state of New Jersey retracted about 9005 cases without
        providing any explanation for the reduction. On April 27, West Virginia
        reduced 162 deaths from the dashboard as these death certificates did
        not officially list COVID-19 as the cause of death. On June 4, One of
        California's county - Alameda, retracted 423 deaths as the govt. changed
        its methodology for counting covid fatalities. This reduced California's
        total deaths count by 377.Missouri started reporting probable cases from
        March 8 onwards. As of May 17, there were 85,778 probable cases which we
        evenly distributed across a 70-day period in our tally.On June 14,
        Washington retracted 30 deaths from dating back to April 2020, and said
        were determined not to be related to Covid-19. On June 15, Missouri
        added 25 deaths, mostly from May, after conducting a weekly sweep of
        death certificatesOn July 2, One of California's county - Santa Clara,
        retracted 503 deaths as the govt. changed its methodology for counting
        covid fatalities. This reduced California's total deaths count by 484.On
        August 2, San Bernardino county in California retracted 217 deaths from
        its official count citing an error.On August 22, the state of Texas
        revised down its case totals after it found errors in number of
        infections reported for Aug 21-22 for Cameron County. As a result, 7,331
        cases were removed from the County's tally, causing 5,896 cases to be
        removed from the state's total cases.On Aug 25, New York state revised
        its total fatality count by 12,000, taking state's daily death count for
        Aug 25 to 1,464On Nov 18, Missouri started publishing figures on
        probable deaths due to COVID-19. So far, 2,792 deaths were mentioned on
        the dashboard which we have consolidated to the state's death toll.On
        March 14, 2022, the state of Massachusetts updated surveillance
        definition used to count COVID-associated deaths, adopted following
        guidance from the Council of State and Territorial Epidemiologists which
        recommended a standardized approach to counting COVID deaths. The new
        definition decreases the total number of deaths reported by 3,770. We
        have adjusted our tally for the last 628 days to reflect the change on
        our tracker.
      </Text>
    </Box>
  );
};

export default AboutData;
