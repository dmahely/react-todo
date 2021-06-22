import React from "react";

const Todo = ({ id, task, isCompleted, setTodos, todos }) => {
  const handleChange = (e) => {
    todos[id].isCompleted = e.currentTarget.checked;
    setTodos((todos) => [...todos]);
  };

  const handleClick = () => {
    setTodos(todos => {
      return [...todos.slice(0, id), ...todos.slice(id + 1)];
    })
  }

  return (
    <div className="Todo--container">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
      />
      <label>{task}</label>
      <button onClick={handleClick}>❌</button>
    </div>
  );
};

export { Todo };
