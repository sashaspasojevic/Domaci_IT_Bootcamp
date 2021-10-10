import React from "react";
import Product from "./Product";

const ProductList = ({products}) => {
  return (
    <>
      {products.map((product) => {
        return (
        <Product key={product.id} product={product}></Product>
        );
      })}
    </>
  );
};

export default ProductList;
