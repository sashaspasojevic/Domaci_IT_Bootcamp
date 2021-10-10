import { arrRandomItem } from "../index.js";
import Countries from "./Countries.js";
import Next from "./Next";
import Preview from "./Preview";

let OneCountry = (country, i) => {
  const divCountry = document.createElement("div");
  const mainContainer = document.querySelector("main");
  const divButton = document.createElement("div");

  const img2 = document.createElement("img");
  img2.src = country.flag;
  img2.alt = `flag of ${country.name}`;

  const p12 = document.createElement("p");
  p12.textContent = `Country name: ${country.name}`;

  const p22 = document.createElement("p");
  p22.textContent = `Country capital city : ${country.capital}`;

  const p3 = document.createElement("p");
  p3.textContent = `Languages : ${country.languages[0].name}`;

  const p4 = document.createElement("p");
  p4.textContent = `timezones : ${country.timezones}`;

  const p5 = document.createElement("p");
  p5.textContent = `population : ${country.population}`;

  const btnPrev = document.createElement("button");
  btnPrev.textContent = "Next";
  btnPrev.addEventListener("click", () => {
    divCountry.innerHTML = "";

    if (i < 15) {
      return Preview(arrRandomItem[++i], divCountry);
    } else {
      return Preview(arrRandomItem[0], divCountry);
    }
  });

  const btnPrev2 = document.createElement("button");
  btnPrev2.textContent = "Preview";
  btnPrev2.addEventListener("click", () => {
    divCountry.innerHTML = "";

    if (i >= 0) {
      return Next(arrRandomItem[--i], divCountry);
    }

    console.log(arrRandomItem[--i]);
  });

  const btnBack = document.createElement("button");
  btnBack.textContent = "Back";
  btnBack.addEventListener("click", () => {
    divCountry.innerHTML = "";

    console.log("klik", arrRandomItem);
    mainContainer.append(...Countries(arrRandomItem));
  });

  divButton.append(btnPrev2, btnPrev, btnBack);
  divCountry.append(img2, p12, p22, p3, p4, p5);
  mainContainer.append(divButton, divCountry);
};

export default OneCountry;
