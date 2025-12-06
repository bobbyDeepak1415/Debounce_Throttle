import React from "react";

const Todo = (props) => {
  const { handleClick, setInput, input, filteredNames } = props;

  const myDebounce = (func, delay) => {
    let timer = 0;

    return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleChange = myDebounce((e) => {
    setInput(e.target.value);
  }, 1000);

  return (
    <div>
      <input value={input} onChange={handleChange}></input>
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
