import React from 'react';
import {Text} from "@chakra-ui/react";

const AppTitle = () => {
  return <Text fontSize="2xl" m="10">
    Transportation Dashboard
  </Text>
}

export default React.memo(AppTitle);
