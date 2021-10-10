let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";

let lt1s = string1.length;
let lt2s = string2.length;
let lt3s = string3.length;
let lt4s = string4.length;

let maxString;

//1. Proveriti koji je string najduzi i ispisati samo njega

if (lt1s > lt2s) {
  maxString = string1;
} else {
  maxString = string2;
}

if (lt3s > maxString.length) {
  maxString = string3;
}

if (lt4s > maxString.length) {
  maxString = string4;
}

console.log(`Najveci string od ponudjenih je ${maxString}`);

//2. Ispisati najkraci string koji sadrzi rec "string"

let minIncludeS;

if (string1.includes("string") && string2.includes("string")) {
  if (lt1s < lt2s) {
    minIncludeS = string1;
  } else {
    minIncludeS = string2;
  }
}
if (string3.includes("string")) {
  if (lt3s < minIncludeS.length) {
    minIncludeS = string3;
  }
}
if (string4.includes("string")) {
  if (lt4s < minIncludeS.length) {
    minIncludeS = string4;
  }
}

console.log(`Najmanji string koji sadrzi rec string je "${minIncludeS}"`);

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

// let composed;
// let newString1, newString2, newString3, newString4;

// if (string1.includes("string koji je")) {
//   newString1 = "";
// } else {
//   newString1 = string1.substring(5);
// }
// if (string2.includes("string koji je")) {
//   newString2 = "";
// } else {
//   newString2 = string2.substring(5);
// }
// if (string3.includes("string koji je")) {
//   newString3 = "";
// } else {
//   newString3 = string3.substring(5);
// }
// if (string4.includes("string koji je")) {
//   newString4 = "";
// } else {
//   newString4 = string4.substring(5);
// }

// console.log(newString1 + newString2 + newString3 + newString4);

// 3 zadatak ponovo

// let composed;
// let newString1, newString2, newString3, newString4;
// let locate = "neki";
// let long = locate.length + 1;

// if (string1.includes("string koji je")) {
//   newString1 = "";
// } else {
//   position = string1.search(locate);
//   newString1 = string1.substring(long);
// }
// if (string2.includes("string koji je")) {
//   newString2 = "";
// } else {
//   position = string2.search(locate);
//   newString2 = string2.substring(long);
// }
// if (string3.includes("string koji je")) {
//   newString3 = "";
// } else {
//   position = string3.search(locate);
//   newString3 = string3.substring(long);
// }
// if (string4.includes("string koji je")) {
//   newString4 = "";
// } else {
//   position = string4.search(locate);
//   newString4 = string4.substring(long);
// }

// console.log(newString1 + newString2 + newString3 + newString4);

// 3 zadatak ponovo sa replace

let composed;
let newString1, newString2, newString3, newString4;
let locate = "neki";

if (string1.includes("string koji je")) {
  newString1 = "";
} else {
  newString1 = string1.replace(locate, "");
}
if (string2.includes("string koji je")) {
  newString2 = "";
} else {
  newString2 = string2.replace(locate, "");
}
if (string3.includes("string koji je")) {
  newString3 = "";
} else {
  newString3 = string3.replace(locate, "");
}
if (string4.includes("string koji je")) {
  newString4 = "";
} else {
  newString4 = string4.replace(locate, "");
}
console.log(newString1 + newString2 + newString3 + newString4);

// 4) На основу количине и цене артикла, исписати укупну цену
// ● Количина је задата у грамима
// ● Цена је задата по килограму

let kolicina = 1542;
let cena = 117500;

let ukupnaCena = (kolicina / 1000) * cena;

console.log(`Ukupna cena je ${ukupnaCena}`);

// 5) Допунити 4. задатак количином новца, и исписати рачун (ако нема довољно новца, исписати поруку)

let kes = 200000;
let kusur;

if (kes > ukupnaCena) {
  kusur = kes - ukupnaCena;
  console.log(`Vas racun iznosi ${ukupnaCena} , kusur iznosi ${kusur}.`);
} else {
  console.log("Nemate dovoljno sredstava na racunu!");
}
