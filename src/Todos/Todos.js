import { React, useState } from "react";
import { Todo } from "../Todo/Todo";
import { defaultState } from "../utils/defaultState";
import { TodoInput } from "../TodoInput/TodoInput";

const Todos = () => {
  const [todos, setTodos] = useState(defaultState);
  const completedTodosNum = todos.filter(todo => !todo.isCompleted).length;
  return (
    <>
      <TodoInput setTodos={setTodos} />
      {todos.map((todo, i) => (
        <Todo
          key={i}
          id={i}
          task={todo.task}
          isCompleted={todo.isCompleted}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    <p>{completedTodosNum} items left</p>
    </>
  );
};

export { Todos };
