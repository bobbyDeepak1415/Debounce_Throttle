import React, { useMemo, useState } from "react";
import useFetchData from "./useFetchData";

const Practice = () => {
  const [input, setInput] = useState("");
  const [localValue, setLocalValue] = useState("");

  const { products } = useFetchData("https://dummyjson.com/products?limit=20");

  const filteredProducts = !input.length
    ? products
    : products.filter((prod) =>
        prod.title.toLowerCase().includes(input.toLocaleLowerCase()),
      );

  const myDebounce = (func, delay) => {
    let timer = 0;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceFunc = useMemo(() => {
  return  myDebounce((value) => {
      setInput(value);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalValue(value);

    debounceFunc(value);
  };

  return (
    <div>
      <h1>Hello</h1>
      <input value={localValue} onChange={handleChange} />
      <button>Search</button>
      <ul></ul>
      {filteredProducts.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
};

export default Practice;
