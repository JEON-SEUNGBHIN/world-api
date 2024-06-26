import axios from 'axios';
import { Country } from '../types/country';

const WORLD_API = "https://restcountries.com/v3.1/all";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(WORLD_API);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries data');
  }
}
