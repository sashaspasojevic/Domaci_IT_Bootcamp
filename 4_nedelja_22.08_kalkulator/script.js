// 2
let calc = document.querySelector("#calc");
let check = document.querySelector("#checkbox");
let prvi = document.querySelector("#prvi");
let drugi = document.querySelector("#drugi");
let rezultat = document.getElementById("result");

calc.addEventListener("click", (e) => {
  e.preventDefault();
  nmbr1 = Number(prvi.value);
  nmbr2 = Number(drugi.value);

  rezultat.value = Number(nmbr1 + nmbr2);

  document.forma.prviBroj.value = "";
  document.forma.drugiBroj.value = "";
});

// dodatak da nam izprazni polje sa rezultatima prilikom ponovnog unosa vrednosti
function clr() {
  if (prvi.value !== "" || drugi.value !== "") {
    rezultat.value = "";
  }
}

prvi.addEventListener("keyup", clr);
drugi.addEventListener("keyup", clr);

// 3
let hiden = document.querySelector("#hide");
check.addEventListener("click", () => {
  hiden.classList.toggle("sakrij");
});
