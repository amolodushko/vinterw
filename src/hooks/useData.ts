import {useMemo, useLayoutEffect, useState} from "react";
import {IData} from "../interfaces";
import useFiltersStore from "../store/filter";

const useData = () => {
  const filterValue = useFiltersStore((state) => state.filterValue)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    fetch("http://api.citybik.es/v2/networks")
      .then((response) => response.json())
      .then((data) => {
        setData(data.networks ?? []);
        setIsLoading(false)
      });
  }, []);

  return useMemo(() => {
    const regexp = new RegExp(filterValue, 'igm')
    const result = filterValue?  data.filter((current: IData) => {
      const {location, company} = current
      const {country, city} = location

      return regexp.test(country) || regexp.test(city) || (company && company.length > 0 && regexp.test(company[0]))
    }) : data;

    const isEmpty = result?.length === 0 && filterValue && !isLoading
    return {data: result, isLoading, isEmpty};
  }, [data, filterValue, isLoading])
}

export default useData;
