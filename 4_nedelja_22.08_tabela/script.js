// let addRow = document.querySelector("#addRow");
// let bodyTable = document.querySelector("#bodyTable");

// addRow.addEventListener("click", () => {

//   createRow();
// });

// function createRow() {
//   bodyTable.innerHTML = `  <tr>
//             <td>jaja</td>
//             <td>jaja</td>
//             <td>jaja</td>
//             <td>jaja</td>
//             <td>jaja</td>
//           </tr>`;
// }

let addRow = document.querySelector("#addRow");
let bodyTable = document.querySelector("#bodyTable");

let head = document.querySelector("thead tr");
console.log(head.length);

addRow.addEventListener("click", () => {
  createRow();
});

function createRow() {
  let row = document.createElement("tr");
  for (let i = 0; i < 5; i++) {
    let ceil = document.createElement("td");
    ceil.textContent = i;
    row.append(ceil);
  }
  bodyTable.append(row);
}
