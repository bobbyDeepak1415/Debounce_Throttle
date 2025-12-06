import React from "react";

const Todo = ({ props }) => {
  const { input, handleClick, setInput, userNames, filteredUserNames } = props;

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Click</button>
      <div>
        {filteredUserNames.map((name, id) => {
          return <li key={id}>{name}</li>;
        })}
      </div>
    </div>
  );
};

export default Todo;
.