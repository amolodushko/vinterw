import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {IData} from "../interfaces";
import ViewStationButton from "./ViewStationButton";

type OwnProps = {
  data: IData[]
}

const List = ({data}: OwnProps) => {
  return data.map(
    (i: IData) =>
      i.company && i.company[0] ? (
        <Flex
          key={i.id}
          mb="4"
          justifyContent="space-between"
          p="5"
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          onClick={() => {
          }}
        >
          <Text>{i.company[0]}</Text>
          <Text>{i.location.city}</Text>
          <Text>{i.location.country}</Text>
          <ViewStationButton id={i.id}/>
        </Flex>
      ) : null
  )
}

export default React.memo(List);
