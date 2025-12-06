import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");



  


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
