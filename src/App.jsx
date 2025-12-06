import axios from "axios";
import React, { useEffect, useState } from "react";

import Todo from "./Todo";

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

  const filteredNames = userNames.filter((name) =>
    name.toLowerCase().startsWith(input.toLowerCase())
  );

  const handleClick = () => {
    alert(input);
    setInput("");
  };

  return (
    <div>
      <Todo
        handleClick={handleClick}
        filteredNames={filteredNames}
        input={input}
        setInput={setInput}
      />
    </div>
  );
};

export default App;
