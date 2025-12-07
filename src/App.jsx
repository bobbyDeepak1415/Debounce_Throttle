import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const [userNames, setUserNames] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      const result = await response.data.users;

      console.log(result.map((u) => u.firstName));
      setUserNames(result.map((u) => u.firstName));
    } catch (e) {
      console.log("failed to fetch...", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange=()=>{
    
  }

  const filteredNames = userNames.filter((name) =>
    name.toLowerCase().startsWith(input.toLowerCase())
  );

  const handleClick = () => {
    alert(input);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Enter</button>
      <div>
        <ul>
          {filteredNames.map((user, id) => {
            return <li key={id}>{user}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
