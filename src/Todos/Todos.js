import { React, useState } from "react";
import { Todo } from "../Todo/Todo";
import { defaultState } from "../utils/defaultState";

const Todos = () => {
  const [todos] = useState(defaultState);
  return (
    <>
      {todos.map((todo) => (
        <Todo task={todo.task} isCompleted={todo.isCompleted} />
      ))}
    </>
  );
};

export { Todos };
