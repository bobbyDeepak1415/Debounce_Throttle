import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const [userNames, setUserNames] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/users");

    const result = await response.data.users;

    setUserNames(result.map((user) => user.firstName));

    console.log(result.map((user) => user.firstName));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    alert(input);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Enter</button>
    </div>
  );
};

export default App;
