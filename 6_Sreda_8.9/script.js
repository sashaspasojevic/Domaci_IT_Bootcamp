const userName = document.querySelector("#username");
const password = document.querySelector("#password");

const forma = document.querySelector("#forma");

const prikazProizvoda = document.querySelector(".proizvodi");

const imeKorisnika = document.querySelector("#name");

const korpaDiv = document.querySelector(".korpa");

let registrovaniKorisnici = [
  {
    name: "Pera",
    pass: "1234",
  },
  {
    name: "Mara",
    pass: "4567",
  },
  {
    name: "Mile",
    pass: "7891",
  },
];

class Kupac {
  name;
  pass;

  constructor(name, pass) {
    this.name = name;
    this.pass = pass;
  }
}

forma.addEventListener("submit", (event) => {
  event.preventDefault();

  let k = new Kupac(userName.value, password.value);

  registrovaniKorisnici.forEach((element) => {
    if (userName.value == element.name && password.value == element.pass) {
      return (imeKorisnika.textContent = userName.value);
    }
  });
  userName.value = "";
  password.value = "";
});

class Proizvod {
  naziv;
  cena;
  dostupnaKolicina;
  constructor(naziv, cena, dostupnaKolicina) {
    this.naziv = naziv;
    this.cena = cena;
    this.dostupnaKolicina = dostupnaKolicina;
  }
}

class Prehrambeni extends Proizvod {
  rokTrajanja;
  constructor(naziv, cena, dostupnaKolicina, rokTrajanja) {
    super(naziv, cena, dostupnaKolicina);
    this.rokTrajanja = rokTrajanja;
  }
}

class BelaTehnika extends Proizvod {
  garancija;
  constructor(naziv, cena, dostupnaKolicina, garancija) {
    super(naziv, cena, dostupnaKolicina);
    this.garancija = garancija;
  }
}

class SviProizvodi {
  sviproizvodi;
  sviproizvodiB;
  constructor() {
    this.sviproizvodi = [];
    this.sviproizvodiB = [];
  }

  dodajProizvode1(przvd) {
    this.sviproizvodi.push(przvd);
  }

  dodajProizvode2(przvd2) {
    this.sviproizvodiB.push(przvd2);
  }
  predstavi() {
    let kolicinaKSP;
    this.sviproizvodi.forEach((element) => {
      const divP = document.createElement("div");
      divP.innerHTML += `<p>Naziv: ${element.naziv}</p>
              <p>Cena: ${element.cena}</p>
              <p>Rok trajanja: ${element.rokTrajanja}</p>`;

      let inputK = document.createElement("input");
      inputK.id = "kolicna";
      inputK.setAttribute("type", "number");
      divP.append(inputK);

      let btnNamirnice = document.createElement("button");
      btnNamirnice.textContent = "Dodaj u korpu";
      btnNamirnice.addEventListener("click", () => {
        let kmd = Number(inputK.value);

        let cenaK = Number(element.cena);
        let cenaDefinitivna = kmd * cenaK;

        let predstaviKorisnika = new SviProizvodi();
        predstaviKorisnika.korpaKorisnika(element.naziv, cenaDefinitivna, kmd);
      });
      divP.append(btnNamirnice);
      prikazProizvoda.append(divP);
    });
  }

  predstavi2() {
    this.sviproizvodiB.forEach((element) => {
      const divP = document.createElement("div");
      divP.innerHTML += `<p>Naziv: ${element.naziv}</p>
              <p>Cena: ${element.cena}</p>
              <p>Garancija: ${element.garancija}</p>`;

      let inputK = document.createElement("input");
      inputK.id = "kolicna";
      inputK.setAttribute("type", "number");
      divP.append(inputK);

      let btnBTexhika = document.createElement("button");
      btnBTexhika.textContent = "Dodaj u korpu";
      btnBTexhika.addEventListener("click", () => {
        let kmd = Number(inputK.value);

        let cenaK = Number(element.cena);
        let cenaDefinitivna = kmd * cenaK;
        let predstaviKorisnika = new SviProizvodi();
        predstaviKorisnika.korpaKorisnika(element.naziv, cenaDefinitivna, kmd);
      });
      divP.append(btnBTexhika);
      prikazProizvoda.append(divP);
    });
  }

  korpaKorisnika(nzv, cn, klcn) {
    let korpaK = document.createElement("div");
    korpaK.classList.add("proizvod");
    korpaK.innerHTML = `
        <p>Naziv: ${nzv}</p>
        <p>Cena: ${cn}</p>
        <p>Kolicina: ${klcn}</p>`;
    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Obrisi";
    btnDelete.addEventListener("click", () => {
      korpaK.remove();
    });
    korpaK.append(btnDelete);
    korpaDiv.append(korpaK);
  }
}

let p1 = new Prehrambeni("Mleko", "100", "1222", "21.12.2021");
let p2 = new Prehrambeni("Jaja", "120", "573", "12.10.2021");
let p3 = new Prehrambeni("Hleb", "140", "777", "15.09.2021");

let bt1 = new BelaTehnika("Frizider", "25423", "3", "5 god");
let bt2 = new BelaTehnika("Sporet", "25753", "3", "5 god");

listaProizvoda = new SviProizvodi();

listaProizvoda.dodajProizvode1(p1);
listaProizvoda.dodajProizvode1(p2);
listaProizvoda.dodajProizvode1(p3);

listaProizvoda2 = new SviProizvodi();

listaProizvoda2.dodajProizvode2(bt1);
listaProizvoda2.dodajProizvode2(bt2);

listaProizvoda.predstavi();
listaProizvoda2.predstavi2();

// let predstaviKorisnika = new SviProizvodi();
// predstaviKorisnika.korpaKorisnika();
