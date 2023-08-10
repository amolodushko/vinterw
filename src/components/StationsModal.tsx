import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from "@chakra-ui/react";

interface Station {
    name: string;
    timestamp: string;
    empty_slots: number;
    free_bikes: number;
}

interface StationsModalProps {
    isOpen: boolean;
    onClose: () => void;
    networkId: string;
}

function StationsModal({ isOpen, onClose, networkId }: StationsModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Stations</ModalHeader>
                <ModalCloseButton />
                <ModalBody>TODO: show stations list of the city</ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default StationsModal;
