import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const Practice = () => {
  const [input, setInput] = useState("");

  const [allProducts, setAllProducts] = useState([]);

  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");

      setAllProducts(res.data.products);
    };

    fetchData();
  }, []);

  const filteredProducts = input.length
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase()),
      )
    : allProducts;

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
    return myDebounce((value) => {
      setInput(value);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setLocalValue(e.target.value);

    debounceFunc(e.target.value);
  };

  return (
    <div>
      <input value={localValue} onChange={handleChange} />
      <div>
        <ul>
          {filteredProducts.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Practice;
