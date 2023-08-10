import React from 'react';
import {Button} from "@chakra-ui/react";
import useNetworksStore from "../store/network";

type OwnProps = {
  id: string
}
const ViewStationButton = ({id}: OwnProps) => {
  const setNetworkId = useNetworksStore((store) => store.setNetworkId)
  return <Button
    colorScheme="blue"
    onClick={() => {
      setNetworkId(id);
    }}
  >
    View Stations
  </Button>
}

export default React.memo(ViewStationButton);
