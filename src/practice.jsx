import axios from "axios";
import React, { useEffect, useState } from "react";

const Practice = () => {
  const [input, setInput] = useState("");

  const [allProducts, setAllProducts] = useState([]);

  const [localValue,setLocalValue]=useState("")

  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");

    const response = await res.data.products;
    setAllProducts(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = input.length
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase()),
      )
    : allProducts;

  const handleChange = (e) => {
    setLocalValue(e.target.value)
  };

  return (
    <div>
      <input value={localValue} onChange={handleChange} />

      <ul>
        {filteredProducts.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Practice;
