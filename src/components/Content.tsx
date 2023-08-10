import React from 'react';
import Network from "./Network";
import Filter from "./Filter";

const Content = () => {
  return <>
    <Filter/>
    <Network/>
  </>
}

export default React.memo(Content);
