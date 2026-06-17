import React, { useState } from "react";
import useFetchData from "./useFetchData";

const Practice = () => {
  const [input, setInput] = useState("");

  const [localValue, setLocalValue] = useState("");

  const { products } = useFetchData("https://dummyjson.com/products");

  const myDebounce = (func, delay) => {
    let timer = 0;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceFunc = myDebounce((value) => {
    setInput(value);
  }, 1000);

  const handleChange = (e) => {
    setLocalValue(e.target.value);

    debounceFunc(e.target.value);
  };

  const filteredProducts = !input.length
    ? products
    : products.filter((prod) =>
        prod.title.toLowerCase().includes(input.toLocaleLowerCase()),
      );

  return (
    <div>
      <h1>Hello</h1>
      <input value={localValue} onChange={handleChange} />
      <ul>
        {filteredProducts.map((prod) => {
          return <li key={prod.id}>{prod.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Practice;
