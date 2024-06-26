import { useEffect, useState } from "react";
import "./App.css";
import { Country } from "./types/country";
import { getCountries } from "./api/worldApi";
import { AxiosError } from "axios";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        setIsLoading(false);
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

  if (isLoading) {
    return <div>로딩중...</div>
  }

  if (error) {
    console.log(error)
    return (
      <div>에러가 발생했습니다!!</div>
    )
  }

  return (
    <>
      <CountryList countries={countries} setCountries={setCountries} />
    </>
  );
}

export default App;
