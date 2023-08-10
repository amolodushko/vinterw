import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import {useCallback, useLayoutEffect, useState} from "react";
import useNetworksStore from "../store/network";

interface Station {
  name: string;
  timestamp: string;
  empty_slots: number;
  free_bikes: number;
}


function StationsModal() {
  const [data, setData] = useState<Station | null>(null)
  const networkId = useNetworksStore((store) => store.networkId)
  const setNetworkId = useNetworksStore((store) => store.setNetworkId)
  const {isOpen, onOpen, onClose: onModalClose} = useDisclosure();

  const onClose = useCallback(() => {
    setNetworkId("");
    onModalClose()
  }, [onModalClose, setNetworkId])

  useLayoutEffect(() => {
    if (networkId) {
      onOpen()
      fetch(`http://api.citybik.es/v2/networks/${networkId}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.network);
        });
    }
    return () => {
      setData(null);
    }
  }, [networkId]);

  return networkId ? (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Stations</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          {data?.name ?? 'loading...'}
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : null;
}

export default StationsModal;
