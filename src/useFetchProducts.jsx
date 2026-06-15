import { useState, useEffect } from "react";

export default function useFetchProducts(query) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // If query has text, search for it; otherwise, fetch default products (increased limit to 20)
    const url = query.trim()
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
      : `https://dummyjson.com/products?limit=20`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.products || []);
      });
  }, [query]); // 3. The hook sees the new query and fires the API call

  return { results };
}
