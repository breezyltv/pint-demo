import { Heading } from '@chakra-ui/react';
import React from 'react';

const TitleText = props => {
  return (
    <Heading {...props} my="20px">
      {props.title}
    </Heading>
  );
};

export default TitleText;
