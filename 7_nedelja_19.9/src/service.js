import axios from "axios";

const BASE = "https://restcountries.eu/rest/v2";
const ALL = "/all";

export const getAllCountries = () => {
  return axios.get(`${BASE}${ALL}`);
};
