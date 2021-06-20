import { React, useState } from "react";
import { Todo } from "../Todo/Todo";
import { defaultState } from "../utils/defaultState";
import { TodoInput } from "../TodoInput/TodoInput";

const Todos = () => {
  const [todos, setTodos] = useState(defaultState);
  return (
    <>
      <TodoInput setTodos={setTodos} />
      {todos.map((todo, i) => (
        <Todo key={i} task={todo.task} isCompleted={todo.isCompleted} />
      ))}
    </>
  );
};

export { Todos };
