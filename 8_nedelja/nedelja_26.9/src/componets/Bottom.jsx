import React, { useState } from "react";
import Expense from "./Expense";
import Income from "./Income";



const Bottom = () => {


const [expense, setExpense] = useState([])
const [income, setIncome] = useState([])
const [selectValue, setSelectValue] = useState('')
const [inputTxt, setInputTxt] = useState('')
const [inputNmbr, setInputNmbr] = useState(0)

let data ={
  allItems: {
    exp : {expense},
    inc : {income}
  },
  totals: {
    exp: 0,
    inc: 0
  }
}

  return (
    <div className="bottom">
      <div className="add">
        <div className="add__container">
          <select className="add__type" onChange={(e) => {
            // console.log(e.target.value);
            setSelectValue(e.target.value)
            
          }}>
            <option value="inc" selected >
              +
            </option>
            <option value="exp">-</option>
          </select>
          <input type="text" className="add__description" placeholder="Opis" onChange={(e) => {
            setInputTxt(e.target.value)
          }}  />
          <input type="number" className="add__value" placeholder="Iznos"  onChange={(e) => {
            setInputNmbr(e.target.value)
          }}/>
          <button className="add__btn" onClick={() => {
            console.log('kliknuo sam' );
            if (setSelectValue === 'exp') {
              console.log('trosak');
              console.log(selectValue);
            }
           
            
          }}>
            dodaj
          </button>
        </div>
      </div>

      <div className="container clearfix">
        <div className="income">
          <h2 className="icome__title">Prihodi</h2>

          <div className="income__list">
            <Income></Income>
          </div>
        </div>

        <div className="expenses">
          <h2 className="expenses__title">Rashodi</h2>

          <div className="expenses__list">
            <Expense></Expense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
