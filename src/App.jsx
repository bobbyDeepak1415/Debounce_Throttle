// import "./App.css";

import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [userNames, setUserNames] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      const result = res.data.users;

      console.log(result);
      setUserNames(result.map((u) => u.firstName));
    } catch (e) {
      console.error("failed to fetch", e);
    }
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
        input={input}
        handleClick={handleClick}
        setInput={setInput}
        filteredNames={filteredNames}
      />
    </div>
  );
}

export default App;
