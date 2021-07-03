import React from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import "./Todo.css";
import cx from "classnames";

const Todo = ({ id, task, isCompleted, setTodos, todos }) => {
  const handleCompleteClick = (e) => {
    todos[id].isCompleted = !todos[id].isCompleted;
    setTodos((todos) => [...todos]);
  };

  const handleDeleteClick = () => {
    setTodos((todos) => {
      return [...todos.slice(0, id), ...todos.slice(id + 1)];
    });
  };

  return (
    <div className="Todo--container">
      <div className="Todo--left">
        <button
          className={cx("Todo--complete", {
            "Todo--checked": isCompleted,
          })}
          onClick={handleCompleteClick}
        >
          <img src={check} alt="Check" />
        </button>
        <label className="Todo--task">{task}</label>
      </div>
      <div className="Todo--right">
        <img
          className="Todo--delete"
          src={cross}
          alt="Cross icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export { Todo };
