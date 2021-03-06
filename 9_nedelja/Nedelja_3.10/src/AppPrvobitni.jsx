import React, { useState } from "react";


const App = () => {

const [products, setProducts] = useState([
    {
      name: "Ice Cream Bar - Rolo Cone",
      price: "7.66",
      info: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      id: "ef063391-de36-4e25-b6c2-ba0649f6920b"
    },
    {
      name: "Anchovy Fillets",
      price: "8.98",
      info: "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      id: "48d2a971-91dd-413a-b4de-b13cb121bc6a"
    },
    {
      name: "Truffle Paste",
      price: "4.26",
      info: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      id: "2c149aaa-cc46-4cd8-a4ed-a71a0fd2b773"
    },
    {
      name: "Soup Campbells Split Pea And Ham",
      price: "4.53",
      info: "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
      id: "6c78857a-f2a5-4868-b643-c306715acba8"
    },
    {
      name: "Pickles - Gherkins",
      price: "6.82",
      info: "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
      id: "3528b1a2-e304-4882-9152-64b23e21e572"
    }
  ])

  const [nameProduct, setNameProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState(0)
  const [infoProduct, setInfoProduct] = useState('')

  return (
    <>
        <h3>add new product</h3>
        <label htmlFor="name">name:</label>
        <br />
        <input type="text" name="name" id="name" placeholder="e.g.) android" onChange={(e) => {
          setNameProduct(e.target.value)
        }}/>
        <br />
        <label htmlFor="price">price:</label>
        <br />
        <input type="number" name="price" id="price" placeholder="e.g.) 100" onChange={(e) => {
          setPriceProduct(e.target.value)
        }} />
        <br />
        <label htmlFor="info">info:</label>
        <br />
        <input type="text" name="info" id="info" placeholder="e.g.) product of google" onChange={(e) => {
          setInfoProduct(e.target.value)
        }}/>
        <br />
        <button onClick={() => {
          let newProduct ={
            name: nameProduct,
            price: priceProduct,
            info: infoProduct,
          }
          console.log(newProduct);
        }}>create product</button>
        <hr />


        {products.map((product) => {
         return (<h4 key={product.id}>{product.name} : $ {product.price}</h4>)  
        })
        }
        <hr />
    </>
  );
};

export default App;
