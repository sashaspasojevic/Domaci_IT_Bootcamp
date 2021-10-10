import React, { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Total from "./components/Total";
import { getAllProducts } from "./service";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <>
      <ProductForm setProducts={setProducts}></ProductForm>
      <ProductList products={products}></ProductList>
      <hr />
      <Total></Total>
    </>
  );
};

export default App;
