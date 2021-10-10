import React, { useState } from "react";

const Product = ({ product }) => {

        const [show, setShow] = useState('')
        const [quantity, setQuantity] = useState(0)

  return (
    <div>
      <h4 key={product.id}>
        {product.name} : $ {product.price}
      </h4>
      <p>qty : {quantity}</p>
      <button onClick={() => {
              setShow(product.info)
        //       ovde bi trebalo sa setuje stanje totalPrice
      }}>show info</button>
      
      <br />
      <button onClick={() => {
              setQuantity(quantity+1)
              //       ovde bi trebalo sa setuje stanje totalPrice
             
      }}>+</button>
      <button onClick={() => {
             if (quantity > 0) {
                     setQuantity(quantity-1) 
             } else {
                     setQuantity(0)
             }
      }}>-</button>
      <br />
      <p>{show}</p>
      <hr />
    </div>
  );
};

export default Product;
