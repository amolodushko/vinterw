import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import List from "./List";
import useData from "../hooks/useData";

const Network = () => {
  const {data, isLoading, isEmpty } = useData()

  return <>
    <Flex display={'flex'} m="10" mt="0" flex={1} direction="column" overflow="auto">
      {isLoading ?
        (<Text>Loading...</Text>)
        : null
      }
      {isEmpty
        ? (<Text>No results found...</Text>)
        : <List data={data}/>
      }
    </Flex>
  </>
}

export default React.memo(Network);
