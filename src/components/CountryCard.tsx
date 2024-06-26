import React from "react";
import { SelectedCountry } from "../types/country";

interface CountryCardProps {
  country: SelectedCountry; // SelectedCountry 타입
  handleSelect: (country: SelectedCountry) => void; // 부모 컴포넌트에서 전달된 함수
}

const CountryCard: React.FC<CountryCardProps> = ({ country, handleSelect }) => {
  return (
    <li
      key={country.name.common}
      onClick={() => handleSelect(country)}
      className="flex-col drop-shadow-lg border rounded-lg m-4 p-4"
    >
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-1/2 h-1/2 m-auto object-cover"
        />
      <div>
        <h3 className="text-lg font-medium mt-4">{country.name.common}</h3>
        <p className="text-sm">{country.capital}</p>
      </div>
    </li>
  );
};

export default CountryCard;
