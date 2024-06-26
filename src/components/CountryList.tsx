import React, { useEffect, useState } from "react";
import { SelectedCountry } from "../types/country";
import { getCountries } from "../api/worldApi";
import { AxiosError } from "axios";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<SelectedCountry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        const selectedCountries = data.map((country) => ({
          ...country,
          isSelected: false,
        }));
        setCountries(selectedCountries);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSelect = (selectedCountry: SelectedCountry) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.name.common === selectedCountry.name.common
          ? { ...country, isSelected: !country.isSelected }
          : country
      )
    );
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    console.error(error);
    return <div>에러가 발생했습니다!!</div>;
  }

  return (
    <div className="w-3/4 flex flex-col items-center m-auto gap-2">
      <h1 className="font-semibold text-2xl">Favorite Countries</h1>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {countries
          .filter((country) => country.isSelected)
          .map((country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelect={handleSelect}
            />
          ))}
      </ul>
      <h1 className="font-semibold text-2xl">Countries</h1>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {countries
          .filter((country) => !country.isSelected)
          .map((country) => (
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
