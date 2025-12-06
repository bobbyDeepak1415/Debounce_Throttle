// import "./App.css";

import { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [data,setData]=useState([])

  // const [name,setName]=useState("")

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");

      res ? setData(res.data.result) : [];
    } catch (e) {
      console.error("failed to fetch", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const handleClick = () => {
    alert(input);
    setInput("");
  };

  return (
    <div>
      <Todo
        props={{ input: input, setInput: setInput, handleClick: handleClick }}
      />
    </div>
  );
}

export default App;
