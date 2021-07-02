import React, { useRef } from "react";
import "./TodoInput.css";

const TodoInput = ({ setTodos }) => {
  const textInputRef = useRef(null);

  const handleOnKeyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // add the todo to state
      const newTodo = { task: textInputRef.current.value, isCompleted: false };
      setTodos((todos) => [...todos, newTodo]);

      // clear the input
      textInputRef.current.value = "";
    }
  };
  const handleClick = (e) => {
    // todo: update state and styling
  };
  return (
    <div className="TodoInput--container">
      <button className="TodoInput--button" onClick={handleClick}></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        ref={textInputRef}
        className="TodoInput--input"
        onKeyUp={handleOnKeyUp}
      />
    </div>
  );
};

export { TodoInput };
