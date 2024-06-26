import React from "react";
import { SelectedCountry} from "../types/country";

interface CountryCardProps {
  country: SelectedCountry; // SelectedCountry 타입
  handleSelect: (country: SelectedCountry) => void; // 부모 컴포넌트에서 전달된 함수
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelect,
}) => {
  return (
    <li
      key={country.name.common}
      onClick={() => handleSelect(country)}
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
