// import "./App.css";

import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [userNames, setUserNames] = useState([]);
  // const [filteredNames, setFilteredNames] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      const result = res.data.users;

      console.log(result);
      setUsers(result);
      setUserNames(result.map((u) => u.firstName));
    } catch (e) {
      console.error("failed to fetch", e);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (input === "") {
  //     setFilteredNames([]);
  //   } else {
  //     const match = userNames.filter((name) =>
  //       name.toLowerCase().startsWith(input.toLowerCase())
  //     );

  //     setFilteredNames(match);
  //   }
  // }, [input, userNames]);

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
        props={{
          filteredNames: filteredNames,
          input: input,
          setInput: setInput,
          handleClick: handleClick,
        }}
      />
    </div>
  );
}

export default App;
