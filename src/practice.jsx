import React, { useState } from "react";
import useFetchData from "./useFetchData";

const Practice = () => {

  const [input,setInput]=useState("")

  const { products } = useFetchData("https://dummyjson.com/products");

  return <div>Hello


  </div>;
};

export default Practice;
