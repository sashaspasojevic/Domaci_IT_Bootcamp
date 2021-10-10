import { arrRandomItem } from "../index.js";

const Preview = (countryToShow = arrRandomItem[14], divCountry) => {
  console.log(countryToShow);

  const mainContainer = document.querySelector("main");
  const divButton = document.createElement("div");

  const img2 = document.createElement("img");
  img2.src = countryToShow.flag;
  img2.alt = `flag of ${countryToShow.name}`;

  const p12 = document.createElement("p");
  p12.textContent = `Country name: ${countryToShow.name}`;

  const p22 = document.createElement("p");
  p22.textContent = `Country capital city : ${countryToShow.capital}`;

  const p3 = document.createElement("p");
  p3.textContent = `Languages : ${countryToShow.languages[0].name}`;

  const p4 = document.createElement("p");
  p4.textContent = `timezones : ${countryToShow.timezones}`;

  const p5 = document.createElement("p");
  p5.textContent = `population : ${countryToShow.population}`;

  divCountry.append(img2, p12, p22, p3, p4, p5);
  mainContainer.append(divCountry);
};

export default Preview;
