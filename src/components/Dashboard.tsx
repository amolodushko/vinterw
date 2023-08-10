import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Text,
    Button,
    Input,
    useDisclosure,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import StationsModal from "./StationsModal";

interface IData {
    id: string;
    company: string[];
    location: { country: string; city: string };
}

function Dashboard() {
    const [d, setD] = useState<IData[] | null>(null);
    const [f, setF] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [nwkId, setNwkId] = useState<string>("");

    useEffect(() => {
        fetch("http://api.citybik.es/v2/networks")
            .then((response) => response.json())
            .then((data) => setD(data.networks));
    }, []);

    useEffect(() => {
        if (f && d) {
            const filteredData = d.reduce((acc: IData[], cur: IData) => {
                const match =
                    cur.location.country
                        .toLowerCase()
                        .includes(f.toLowerCase()) ||
                    cur.location.city.toLowerCase().includes(f.toLowerCase()) ||
                    (cur.company &&
                        cur.company[0].toLowerCase().includes(f.toLowerCase()));
                if (match) {
                    acc.push(cur);
                }
                return acc;
            }, []);
            setD(filteredData);
        } else if (!f) {
            fetch("http://api.citybik.es/v2/networks")
                .then((response) => response.json())
                .then((data) => setD(data.networks));
        }
    }, [f]);

    return (
        <Flex direction="column" minH="100vh">
            <Header />
            <Box flex="1" p="10">
                <Text fontSize="2xl" mb="10">
                    Transportation Dashboard
                </Text>
                <Input
                    placeholder="Filter results..."
                    value={f}
                    onChange={(e) => setF(e.target.value)}
                    mb={2}
                />
                {d ? (
                    d.map(
                        (i: IData) =>
                            (
                                <Flex
                                    key={i.id}
                                    mb="4"
                                    justifyContent="space-between"
                                    p="5"
                                    border="1px"
                                    borderColor="gray.200"
                                    borderRadius="md"
                                    onClick={() => {}}
                                >
                                    <Text>{i.company[0]}</Text>
                                    <Text>{i.location.city}</Text>
                                    <Text>{i.location.country}</Text>
                                    <Button
                                        colorScheme="blue"
                                        onClick={() => {
                                            setNwkId(i.id);
                                            onOpen();
                                        }}
                                    >
                                        View Stations
                                    </Button>
                                </Flex>
                            )
                    )
                ) : (
                    <Text>Loading...</Text>
                )}
            </Box>
            <StationsModal
                isOpen={isOpen}
                onClose={onClose}
                networkId={nwkId}
            />
            <Footer />
        </Flex>
    );
}

export default Dashboard;
