import React, { useState } from "react";
import { postProduct } from "../service";

const ProductForm = ({setProducts}) => {

  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [infoProduct, setInfoProduct] = useState("");

  return (
    <div>
      <h3>add new product</h3>
      <label htmlFor="name">name:</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="e.g.) android"
        onChange={(e) => {
          setNameProduct(e.target.value);
        }}
      />
      <br />
      <label htmlFor="price">price:</label>
      <br />
      <input
        type="number"
        name="price"
        id="price"
        placeholder="e.g.) 100"
        onChange={(e) => {
          setPriceProduct(e.target.value);
        }}
      />
      <br />
      <label htmlFor="info">info:</label>
      <br />
      <input
        type="text"
        name="info"
        id="info"
        placeholder="e.g.) product of google"
        onChange={(e) => {
          setInfoProduct(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          let newProduct = {
            name: nameProduct,
            price: priceProduct,
            info: infoProduct,
          };
    
          postProduct(newProduct).then((res) => {
                  setProducts((prev) => {
                          return [...prev, res.data]
                  })
          })


        }}
      >
        create product
      </button>
      <hr />
    </div>
  );
};

export default ProductForm;
