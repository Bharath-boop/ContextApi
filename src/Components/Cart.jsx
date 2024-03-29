// src/Components/Cards.jsx
import React, { useContext } from "react";
import { UserContext } from "../App";
import Products from "./Products";

function Cards() {
  const { products, setProducts } = useContext(UserContext);

  return (
    <>
      <div className="text-center" id="container">
        {products.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Cards;
