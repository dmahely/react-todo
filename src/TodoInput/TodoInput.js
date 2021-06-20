import React, { useRef } from "react";

const TodoInput = ({ setTodos }) => {
  const textInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // add the todo to state
    const newTodo = { task: textInputRef.current.value, isCompleted: false };
    setTodos((todos) => [...todos, newTodo]);

    // clear the input
    textInputRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new todo..."
        ref={textInputRef}
      />
    </form>
  );
};

export { TodoInput };
