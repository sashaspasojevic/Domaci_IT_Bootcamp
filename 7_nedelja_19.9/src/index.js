import Countries from "./components/Countries";
import { getAllCountries } from "./service";

let countries = [];
let arrRandomItem = [];
const mainContainer = document.querySelector("main");

getAllCountries().then((res) => {
  countries = res.data;

  let myArray = countries;
  let randomItem;
  arrRandomItem = [];

  for (let i = 0; i < 15; i++) {
    randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    arrRandomItem.push(randomItem);
  }

  mainContainer.append(...Countries(arrRandomItem));
});

export { arrRandomItem };
