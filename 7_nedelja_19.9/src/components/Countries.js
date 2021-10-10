import Country from "./Country.js";

// const Countries = (countries) => {
//   countries.map((country) => {
//     return Country(country);
//   });
// };

// export default Countries;

const Countries = (countries) =>
  countries.map((country, i) => Country(country, i));

export default Countries;
