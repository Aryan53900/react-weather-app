
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOption } from "./api";

const Search = ({ onSearchchange }) => { 
    const [search, setSearch] = useState(null);

    const load = (inputValue) => {
        // Fix 1: Used the correct endpoint for searching cities and added the inputValue
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, 
            geoApiOption
        )
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        // Fix 2: Corrected the template literal syntax to combine variables properly
                        value: `${city.latitude} ${city.longitude}`, 
                        label: `${city.name}, ${city.countryCode}`,
                    };
                })
            };
        })
        .catch(err => {
            console.error(err);
            // Fix 3: Ensure we return an empty options array if the API call fails
            return { options: [] }; 
        });
    };
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchchange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search your city"
            debounceTimeout={500}
            value={search}
            onChange={handleOnChange}
            loadOptions={load}
        />
    );
}

export default Search;