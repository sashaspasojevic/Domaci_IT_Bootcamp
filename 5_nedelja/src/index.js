import functionS from "./service.js";

const inputTxt = document.querySelector("#input-text");
const forma = document.querySelector("#forma");
const divLista = document.querySelector("#lista");
let counterI = 3;
let isChecked = false;
let checkBox;
let pText;
let editFlag = false;
let indexItem2;

let arr = functionS.data;

functionS.data.forEach((todo) => {
  if (todo.done == "true") {
    isSomethingCheck();
  }
  addToPage(todo);
});

forma.addEventListener("submit", (e) => {
  e.preventDefault();

  let podatak = inputTxt.value;
  functionS.add(podatak, isChecked);
  counterI++;

  console.log(counterI);

  addToPage(arr[counterI]);
  if (editFlag) {
    functionS.changeById(indexItem2, inputTxt.value);
  }
});

function addToPage(todo) {
  const divItem = document.createElement("div");
  divItem.classList.add("item");

  let attr = document.createAttribute("data-id");
  attr.value = counterI;

  pText = document.createElement("p");
  pText.textContent = todo.desc;
  checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("click", isSomethingCheck);
  const btnDel = document.createElement("button");
  btnDel.textContent = "X";
  btnDel.addEventListener("click", () => {
    divItem.remove();
    let index = divItem.dataset.id;
    let indexItem = Number(index) + 1;
    functionS.deleteById(indexItem);
  });

  const btnChange = document.createElement("button");
  btnChange.textContent = "Change";
  btnChange.addEventListener("click", () => {
    inputTxt.value = todo.desc;
    editFlag = true;
    let index2 = divItem.dataset.id;
    indexItem2 = Number(index2) + 1;
    console.log(indexItem2);
    divItem.remove();
  });
  divItem.setAttributeNode(attr);
  divItem.append(pText, checkBox, btnDel, btnChange);
  divLista.append(divItem);

  inputTxt.value = "";
}

function isSomethingCheck() {
  if (checkBox.checked == true) {
    isChecked = true;
    pText.style.textDecoration = "line-through";
  }
}
