import axios from "axios";
import React, { useEffect, useState } from "react";

const Practice = () => {
  const [input, setInput] = useState("");

  const [allProducts, setAllProducts] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");

    const response = await res.data.products;
    setAllProducts(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts=allProducts
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />

      <ul>
        {filteredProducts.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Practice;
