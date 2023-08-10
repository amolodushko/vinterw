import React, {useCallback} from 'react';
import {Box, Input} from "@chakra-ui/react";
import useFiltersStore from "../store/filter";
import useDebounce from "../hooks/useDebounce";

const Filter = () => {
  const setFilterValue = useFiltersStore((state) => state.setFilterValue)
  const onChange = useCallback(
    ({target}: React.ChangeEvent<HTMLInputElement>) => setFilterValue(target.value),
    [setFilterValue])
  const onChangeDebounced = useDebounce(onChange, 250)

  return <Box mr="10" ml="10">
    <Input
      placeholder="Filter results..."
      onChange={onChangeDebounced}
      mb={2}
    />
  </Box>
}

export default React.memo(Filter);
