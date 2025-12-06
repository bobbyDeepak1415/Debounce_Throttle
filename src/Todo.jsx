import React from "react";

const Todo = (props) => {
  const { handleClick, setInput, input, filteredNames } = props;

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Enter</button>

      <div>
        {input.length > 0 &&
          filteredNames.map((name, id) => {
            return <li key={id}>{name}</li>;
          })}
      </div>
    </div>
  );
};

export default Todo;
