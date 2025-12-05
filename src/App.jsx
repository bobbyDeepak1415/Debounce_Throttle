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
      <Todo input={input} setInput={setInput} handleClick={handleClick} />
    </div>
  );
}

export default App;
