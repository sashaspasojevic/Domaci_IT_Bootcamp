import Countries from "./components/Countries";
import { getAllCountries } from "./service.js";

let main = document.querySelector("main");
let inputFilter = document.querySelector("#input-search");

let countries = [];

getAllCountries().then((res) => {
  countries = res.data;

  main.append(...Countries(countries));

  document.querySelector("#select").append(
    Select(
      new Set(
        countries.map((country) => {
          return country.region;
        })
      ),
      countries
    )
  );

  filterFunction(countries);
});

const Select = (options, countries) => {
  const select = document.createElement("select");

  const defOpt = document.createElement("option");
  defOpt.value = "-1";
  defOpt.selected = true;
  defOpt.disabled = true;
  defOpt.hidden = true;
  defOpt.textContent = "Izaberite region";

  select.append(defOpt);

  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.append(opt);
  });

  select.addEventListener("change", () => {
    console.log(select.value);

    let countryRegion = countries.filter((country) => {
      main.innerHTML = "";
      return country.region == select.value;
    });

    main.append(...Countries(countryRegion));

    filterFunction(countryRegion);
  });

  return select;
};

let filterFunction = (countries) => {
  inputFilter.addEventListener("input", () => {
    main.innerHTML = "";
    let filter = countries.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(inputFilter.value.toLowerCase());
    });
    main.append(...Countries(filter));

    if (filter.length == 1) {
      let p2 = document.createElement("p");
      p2.innerHTML = `Ime države na maternjem jeziku : ${filter[0].nativeName} <br> Populacija : ${filter[0].population} <br> 
    Glavni grad : : ${filter[0].capital} <br> Internet domen : ${filter[0].topLevelDomain[0]} `;

      main.append(p2);
    }
  });
};
