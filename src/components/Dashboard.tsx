import React from "react";
import {Flex} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AppTitle from "./AppTitle";
import StationsModal from "./StationsModal";

function Dashboard() {
  return (<>
      <Flex direction="column" height="100vh" width="100vw" overflow="hidden">
        <Header/>
        <AppTitle/>
        <Content/>
        <Footer/>
      </Flex>
      <StationsModal/>
    </>
  );
}

export default Dashboard;
