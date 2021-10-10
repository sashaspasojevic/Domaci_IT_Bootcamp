import React, { useState } from "react";

const App = () => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  //   const [result, setResult] = useState([]);
  const [operation, setOperation] = useState("");

  //   const showResult = () => {
  //     setResult([valueA, operation, valueB]);
  //   };

  const handleSubmit = () => {
    if (operation === "+") {
      setValueA(Number(valueA) + Number(valueB));
    }
    if (operation === "-") {
      setValueA(Number(valueA) - Number(valueB));
    }
    if (operation === "*") {
      setValueA(Number(valueA) * Number(valueB));
    }
    if (operation === "/") {
      setValueA(Number(valueA) / Number(valueB));
    }
  };

  return (
    <div>
      <p>Result {valueA}</p>
      <h2>Calculator</h2>
      <p>
        a: {valueA} b: {valueB}
      </p>
      <input type="text" defaultValue={valueA} />
      <input
        defaultValue={""}
        type="number"
        onChange={(e) => {
          if (operation === "") {
            setValueA(e.target.value);
          } else {
            setValueB(e.target.value);
          }
        }}
      />
      <button
        onClick={() => {
          setOperation("+");
          handleSubmit();
          //   showResult();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setOperation("-");
          handleSubmit();
          //   showResult();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setOperation("*");
          handleSubmit();
          //   showResult();
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          setOperation("/");
          handleSubmit();
          //   showResult();
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          setValueA("");
          setValueB("");
          window.location.reload(false);
        }}
      >
        Clear
      </button>
      <p>
        {valueA} {operation} {valueB}
        {/* {result.map((el) => {
          return el;
        })} */}
      </p>
    </div>
  );
};

export default App;
