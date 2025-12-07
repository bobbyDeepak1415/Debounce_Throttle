import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const [userNames, setUserNames] = useState([]);

  const [localValue, setLocalValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      const result = response.data.users;

      console.log(result.map((u) => u.firstName));
      setUserNames(result.map((u) => u.firstName));
    } catch (e) {
      console.log("failed to fetch...", e);
    }
  };

  const myDebounce = (func, delay) => {
    let timer = 0;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedState = myDebounce((value) => {
    setInput(value);
  }, 1500);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    setLocalValue(value);

    debouncedState(value);
  };

  const filteredNames = userNames.filter((name) =>
    name.toLowerCase().startsWith(input.toLowerCase())
  );

  const handleClick = () => {
    alert(input);
    setInput("");
  };

  return (
    <div>
      <input value={localValue} onChange={handleChange}></input>
      <button onClick={handleClick}>Enter</button>
      <div>
        <ul>
          {input.length > 0 &&
            filteredNames.map((user, id) => {
              return <li key={id}>{user}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
