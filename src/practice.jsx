import React, { useState, useEffect } from "react";
import useFetchData from "./hooks/useFetchData";

const practice=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // 1. Every keystroke updates 'searchTerm' instantly, but triggers this effect
  useEffect(() => {
    const timer = setTimeout(() => {
      // 2. This only runs if the user stops typing for 400ms
      setDebouncedQuery(searchTerm);
    }, 400);

    return () => clearTimeout(timer); // Reset the timer if they type again
  }, [searchTerm]);

  // 4. Hook returns the raw data array
  const { results } = useFetchData(debouncedQuery);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />

      <ul style={{ marginTop: "15px" }}>
        {results.map((product) => (
          <li key={product.id} style={{ padding: "5px 0" }}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}



