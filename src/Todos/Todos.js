import React from "react";
import { Todo } from "../Todo/Todo";

const defaultState = [
  {
    task: "Work on React project",
    isCompleted: false,
  },
  {
    task: "Buy more face masks",
    isCompleted: true,
  },
  {
    task: "Finish reading The Scarlet Letter",
    isCompleted: false,
  },
];

const Todos = () => {
  return (
    <>
      {defaultState.map((todo) => (
        <Todo task={todo.task} isCompleted={todo.isCompleted} />
      ))}
    </>
  );
};

export { Todos };
