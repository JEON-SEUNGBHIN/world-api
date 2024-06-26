import React, { useState } from "react";
import { Country } from "../types/country";
import CountryCard from "./CountryCard";

interface CountryListProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

const CountryList: React.FC<CountryListProps> = ({ countries, setCountries }) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleSelect = (countryName: string) => {
    setSelectedCountries((prevSelected) =>
      prevSelected.includes(countryName)
        ? prevSelected.filter((name) => name !== countryName)
        : [...prevSelected, countryName]
    );
  };

  const favoriteCountries = countries.filter((country) =>
    selectedCountries.includes(country.name.common)
  );

  const remainingCountries = countries.filter(
    (country) => !selectedCountries.includes(country.name.common)
  );

  return (
    <div>
      <h2>Favorite Countries</h2>
      <ul>
        {favoriteCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            handleSelect={handleSelect}
          />
        ))}
      </ul>
      <h2>Countries</h2>
      <ul>
        {remainingCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            handleSelect={handleSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
