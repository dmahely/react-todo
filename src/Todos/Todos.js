import { React, useState } from "react";
import { Todo } from "../Todo/Todo";
import { defaultState } from "../utils/defaultState";
import { TodoInput } from "../TodoInput/TodoInput";

const Todos = () => {
  const [todos, setTodos] = useState(defaultState);
  const [completedFilter, setCompletedFilter] = useState(null);
  const completedTodosNum = todos.filter(todo => !todo.isCompleted).length;

  const handleClick = () => {
    setTodos(todos.filter(todo => !todo.isCompleted))
  }
  return (
    <>
      <TodoInput setTodos={setTodos} />
      {todos
      .filter(todo => completedFilter === null ? todo : todo.isCompleted === completedFilter)
      .map((todo, i) => (
        <Todo
          key={i}
          id={i}
          task={todo.task}
          isCompleted={todo.isCompleted}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    <button onClick={handleClick}>Clear completed</button>
    <p>{completedTodosNum} items left</p>
    </>
  );
};

export { Todos };
