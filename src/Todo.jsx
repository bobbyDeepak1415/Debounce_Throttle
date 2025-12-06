import React, { useState } from "react";

const Todo = (props) => {
  const { handleClick, setInput, input, filteredNames } = props;

  const [localValue, setLocalValue] = useState("");

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
  }, 3000);

  const handleChange = (e) => {
    const value = e.target.value;

    setLocalValue(value);

    debouncedState(value);
  };

  return (
    <div>
      <input value={localValue} onChange={handleChange}></input>
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
