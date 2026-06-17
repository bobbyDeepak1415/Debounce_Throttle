import React, { useState } from "react";
import useFetchData from "./useFetchData";

const Practice = () => {
  const [input, setInput] = useState("");

  const { products } = useFetchData("https://dummyjson.com/products?limit=20");

  const filteredProducts = !input.length
    ? products
    : products.filter((prod) =>
        prod.title.toLowerCase().includes(input.toLocaleLowerCase()),
      );

  return (
    <div>
      <h1>Hello</h1>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button>Search</button>
      <ul></ul>
      {filteredProducts.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
};

export default Practice;


