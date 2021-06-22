import { React, useState } from "react";
import { Todo } from "../Todo/Todo";
import { defaultState } from "../utils/defaultState";
import { filterEnum } from "../utils/filterEnum";
import { TodoInput } from "../TodoInput/TodoInput";

const Todos = () => {
  const [todos, setTodos] = useState(defaultState);
  const [completedFilter, setCompletedFilter] = useState(null);
  const completedTodosNum = todos.filter(todo => !todo.isCompleted).length;

  const handleClick = () => {
    setTodos(todos.filter(todo => !todo.isCompleted))
  }

  const handleFilterClick = (e) => {
    const val = e.target.id;
    setCompletedFilter(filterEnum[val])
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
    {/* making use of event propagation 🎉 */}
    <div onClick={handleFilterClick}>
      <button id="all">All</button>
      <button id="active">Active</button>
      <button id="completed">Completed</button>
    </div>
    <p>{completedTodosNum} items left</p>
    </>
  );
};

export { Todos };
