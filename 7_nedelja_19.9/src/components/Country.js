import OneCountry from "./OneCountry";

const Country = (country, i) => {
  const divCountry = document.createElement("div");

  const img = document.createElement("img");
  img.src = country.flag;
  img.alt = `flag of ${country.name}`;

  const p1 = document.createElement("p");
  p1.textContent = `Country name: ${country.name}`;

  const p2 = document.createElement("p");
  p2.textContent = `Country capital city : ${country.capital}`;

  divCountry.append(img, p1, p2);

  img.addEventListener("click", () => {
    const mainContainer = document.querySelector("main");
    mainContainer.innerHTML = "";
    let idOfCountry = i;
    OneCountry(country, idOfCountry);
    console.log(country, idOfCountry);
  });

  return divCountry;
};

export default Country;
