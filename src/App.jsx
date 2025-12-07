import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState([]);

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      const result = await response.data.users;

      setUsers(result);
    } catch (e) {
      console.log("failed to fetch...", e);
    }
  };

  const handleClick = () => {};

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Enter</button>
      <div>{}</div>
    </div>
  );
};

export default App;
