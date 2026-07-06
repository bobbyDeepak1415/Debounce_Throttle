import axios from "axios";
import React, { useEffect, useState } from "react";

const Practice = () => {
  const [input, setInput] = useState("");

  const [allProducts, setAllProducts] = useState([]);

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

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
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
