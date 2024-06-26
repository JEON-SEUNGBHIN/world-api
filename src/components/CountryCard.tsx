import React from "react";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelect: (countryName: string) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, handleSelect }) => {
  return (
    <li
      key={country.name.common}
      onClick={() => handleSelect(country.name.common)}
    >
      <div>
        <h3>{country.name.common}</h3>
        <p>Capital: {country.capital}</p>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
      </div>
    </li>
  );
};

export default CountryCard;
