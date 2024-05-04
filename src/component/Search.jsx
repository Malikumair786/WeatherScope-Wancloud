import React, { useState } from "react";
import axios from "axios";

import { axiosGeoApiOptions, GEO_API_URL } from "apis/api";
import { AsyncPaginate } from "react-select-async-paginate";

const InputSearch = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await axios.get(`${GEO_API_URL}/cities`, {
        params: {
          minPopulation: 1000000,
          namePrefix: inputValue,
        },
        ...axiosGeoApiOptions,
      });
      return {
        options: response.data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
    } catch (error) {
      console.error("Error loading options:", error);
      return { options: [] };
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="mt-4">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default InputSearch;
