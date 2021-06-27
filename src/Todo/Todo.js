import React from "react";

const Todo = ({ id, task, isCompleted, setTodos, todos }) => {
  const handleCompleteClick = (e) => {
    todos[id].isCompleted = !todos[id].isCompleted;
    setTodos((todos) => [...todos]);
  };

  const handleDeleteClick = () => {
    setTodos(todos => {
      return [...todos.slice(0, id), ...todos.slice(id + 1)];
    })
  }

  return (
    <div className="Todo--container">
      <button onClick={handleCompleteClick}>{isCompleted ? '✔️' : '🔘'}</button>
      <label>{task}</label>
      <button onClick={handleDeleteClick}>❌</button>
    </div>
  );
};

export { Todo };
