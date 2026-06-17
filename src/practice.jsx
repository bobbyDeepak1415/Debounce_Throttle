import React, { useState } from "react";
import useFetchData from "./useFetchData";

const Practice = () => {
  const [input, setInput] = useState("");

  const { products } = useFetchData("https://dummyjson.com/products");

  const filteredProducts = !input.length
    ? products
    : products.filter((prod) =>
        prod.title.toLowerCase().includes(input.toLocaleLowerCase()),
      );

  return (
    <div>
      <h1>Hello</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        {filteredProducts.map((prod) => {
          return <li key={prod.id}>{prod.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Practice;
