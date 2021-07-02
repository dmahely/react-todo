import React, { useRef, useState } from "react";
import "./TodoInput.css";
import check from "../images/icon-check.svg";
import cx from "classnames";

const TodoInput = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState({ task: "", isCompleted: false });
  const textInputRef = useRef(null);

  const handleOnKeyUp = (e) => {
    // add the todo to state
    setNewTodo((newTodo) => {
      return { ...newTodo, task: textInputRef.current.value };
    });

    if (e.key === "Enter" && textInputRef.current.value !== "") {
      e.preventDefault();
      setTodos((todos) => [...todos, newTodo]);

      // clear the input and reset state
      textInputRef.current.value = "";
      setNewTodo({ task: "", isCompleted: false });
    }
  };
  const handleClick = () => {
    setNewTodo((newTodo) => {
      return { ...newTodo, isCompleted: !newTodo.isCompleted };
    });
  };
  return (
    <div className="TodoInput--container">
      <button
        className={cx("TodoInput--button", {
          "TodoInput--button-checked": newTodo.isCompleted,
        })}
        onClick={handleClick}
      >
        <img src={check} alt="Check" />
      </button>
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
