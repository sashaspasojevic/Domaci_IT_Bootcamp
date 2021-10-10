//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

let niz = [1, 5, 7, 32, 35, 40, 43, 56, 72, 74];

function jeDeljiv(a) {
  let nizD5 = [];
  for (let i = 0; i < a.length; i++) {
    const el = a[i];
    if (el % 5 == 0) {
      nizD5.push(el);
    }
  }
  return nizD5;
}

console.log(jeDeljiv(niz));

//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime
// * Vrsta
// * Sposobnosti (niz sposobnosti pokemona)
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

pokemon1 = {
  ime: "Bulbasaur",
  vrsta: "Travnati/Otrovni",
  sposobnosti: "Bujanje",
  karakteristike: {
    napad: 49,
    odbrana: 49,
    brzina: 45,
  },
};

pokemon2 = {
  ime: "Supia",
  vrsta: "Buba/Otrovni",
  sposobnosti: "Rojenje",
  karakteristike: {
    napad: 80,
    odbrana: 40,
    brzina: 75,
  },
};
pokemon3 = {
  ime: "Fushigisou",
  vrsta: "Travnati/Otrovni",
  sposobnosti: "Bujanje",
  karakteristike: {
    napad: 62,
    odbrana: 63,
    brzina: 60,
  },
};
pokemon4 = {
  ime: "Nidokuin",
  vrsta: "Otrovni/Zemljan",
  sposobnosti: "Otrovni vršak",
  karakteristike: {
    napad: 82,
    odbrana: 87,
    brzina: 76,
  },
};

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

console.log(pokemoni);

//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

function sposobnostiPokermona(pokemoni) {
  let nizSposobnosti = [];
  for (const sposobnost of pokemoni) {
    let moc = sposobnost.sposobnosti;
    nizSposobnosti.push(moc);
  }

  return nizSposobnosti;
}

console.log(sposobnostiPokermona(pokemoni));

//4. Sortirati pokemone po brzini, rastuće.

let sortPokemoniV = pokemoni.slice(0).sort(function (a, b) {
  return a.karakteristike.brzina - b.karakteristike.brzina;
});

console.log(sortPokemoniV);

//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

// function najaciPokemon(pkmn) {
//   let najaci = pkmn.sort(function (a, b) {
//     return b.karakteristike.napad - a.karakteristike.napad;
//   });

//   return najaci[0].ime;
// }

// console.log(`Najaci Pokemon je ${najaciPokemon(pokemoni)}`);

function najaciPokemon(pkmn) {
  let najaci = pkmn.slice(0).sort(function (a, b) {
    return b.karakteristike.napad - a.karakteristike.napad;
  });

  let najaciPK = "";
  for (let i = 0; i < najaci.length; i++) {
    // za slucaj da vise pokemona ima istu snagu napada
    if (najaci[0].karakteristike.napad === najaci[i].karakteristike.napad) {
      najaciPK += " " + najaci[i].ime;
    }
  }

  return najaciPK;
}

console.log(` Najaci : ${najaciPokemon(pokemoni)}`);
