import React from "react";

const Todo = ({ task, isCompleted }) => {
  return (
    <div className="Todo--container">
      <input type="checkbox" defaultChecked={isCompleted} />
      <label>{task}</label>
    </div>
  );
};

export { Todo };
