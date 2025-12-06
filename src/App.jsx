// import "./App.css";

import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [userNames,setUserNames]=useState([])
  const [filteredUserNames,setFilteredUserNames]=useState([])
  

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      const result = res.data.users;

      console.log(result);
      setUsers(result);
      setUserNames(result.map((u)=>u.firstName))
    } catch (e) {
      console.error("failed to fetch", e);
      setUsers([]);
    }
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
      <Todo
        props={{filteredUserNames:filteredUserNames,userNames:userNames, input: input, setInput: setInput, handleClick: handleClick }}
      />
    </div>
  );
}

export default App;
