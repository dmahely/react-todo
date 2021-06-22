import React from "react";

const Todo = ({ id, task, isCompleted, setTodos, todos }) => {
  const handleChange = (e) => {
    todos[id].isCompleted = e.currentTarget.checked;
    setTodos((todos) => [...todos]);
  };

  const handleClick = () => {
    setTodos(todos => {
      todos.splice(id, 1)
      return [...todos]
    })
  }

  return (
    <div className="Todo--container">
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onChange={handleChange}
      />
      <label>{task}</label>
      <button onClick={handleClick}>❌</button>
    </div>
  );
};

export { Todo };
