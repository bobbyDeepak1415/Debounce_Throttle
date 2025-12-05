import React from "react";

const Todo = ( props ) => {
  const { input, handleClick, setInput } = props;

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Todo;
