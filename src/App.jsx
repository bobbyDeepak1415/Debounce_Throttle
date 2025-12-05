// import "./App.css";

import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [input, setInput] = useState("");
  const handleClick = () => {
    alert(input);
    setInput("");
  };

  return (
    <div>
      <Todo setInput={setInput} handleClick={handleClick} input={input}/>
    </div>
  );
}

export default App;
