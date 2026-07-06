import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";

const Practice = () => {
  const [input, setInput] = useState("");

  const [allProducts, setAllProducts] = useState([]);

  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/users");

      const userNames = res.data.users;

      setAllProducts(userNames.map((name) => name.firstName));
    };

    fetchData();
  }, []);

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

  const filteredProducts = input.length
    ? allProducts.filter((product) =>
        product.toLowerCase().includes(input.toLowerCase()),
      )
    : allProducts;

  return (
    <div>
      <input value={localValue} onChange={handleChange} />
      <div>
        <ul>
          {filteredProducts.map((user, id) => {
            return <li key={id}>{user}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Practice;
