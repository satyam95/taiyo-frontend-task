import { useQuery } from "react-query";
import axios from "axios";

const fetchWorldwideData = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/all");
  return response.data;
};

const fetchCountryData = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  return response.data;
};

const fetchHistoricalData = async () => {
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.data;
};

export const useWorldwideData = () =>
  useQuery("worldwideData", fetchWorldwideData);
export const useCountryData = () => useQuery("countryData", fetchCountryData);
export const useHistoricalData = () =>
  useQuery("historicalData", fetchHistoricalData);
