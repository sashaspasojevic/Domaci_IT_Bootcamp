// 1.

let vPuza = 3;
let rDrveta = 1;
let hDrveta = 100;
let dan = 0;

while (vPuza < hDrveta) {
  vPuza += 3;
  hDrveta += rDrveta;
  dan += 1;
  console.log(
    `Dan ${dan}: Puz je presao ${vPuza} a visina drveta je ${hDrveta}`
  );
  if (vPuza >= hDrveta) {
    console.log(`Puz se popeo na drvo za ${dan} dana.`);
  }
}

// 2.

console.log("--- DRUGI ZADATAK ---");

let danUNedelji = 6;
let cena = 11000;
let zaposlenaLicaP = cena * 0.95; //> 5000 din
let studentiP = cena * 0.8; //> 3000 din
let penzioneriP = cena * 0.7; // > 2000 din
let firmeP = cena * 0.9; // > 10000 din
let vikendP = cena * 0.95; //
let penzioner = true;
let student = true;
let zaposleni = true;
let firme = true;

let cenaZaPenzionere = cena;
let cenaZaStudente = cena;
let cenaZaZaposlene = cena;
let cenaZaFirme = cena;

let vikendPoust = 0.95;

if (cena > 2000 && penzioner) {
  cenaZaPenzionere = penzioneriP;
}
if (cena > 3000 && student) {
  cenaZaStudente = studentiP;
}
if (cena > 5000 && zaposleni) {
  cenaZaZaposlene = zaposlenaLicaP;
}
if (cena > 10000 && firme) {
  cenaZaFirme = firmeP;
}

switch (danUNedelji) {
  case 1:

  case 2:

  case 3:

  case 4:

  case 5:
    console.log(
      `Cena za penzionere : ${cenaZaPenzionere} , cena za studente je : ${cenaZaStudente} , cena za  zaposlene je ${cenaZaZaposlene}, cena za firme je ${cenaZaFirme}`
    );
    break;
  case 6:

  case 7:
    let vikendPenzioneri = cenaZaPenzionere * vikendPoust;
    let vikendStudenti = cenaZaStudente * vikendPoust;
    let vikendZaposleni = cenaZaZaposlene * vikendPoust;
    let vikendFirme = cenaZaFirme * vikendPoust;

    console.log(
      `Vikend cena za penzionere : ${vikendPenzioneri} , cena za studente je : ${vikendStudenti} , cena za  zaposlene je ${vikendZaposleni}, cena za firme je ${vikendFirme}`
    );
    break;
  default:
    break;
}
