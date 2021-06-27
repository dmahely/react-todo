import { nanoid } from "nanoid";
import { React, useEffect, useState } from "react";
import { Todo } from "../Todo/Todo";
import { defaultState } from "../utils/defaultState";
import { filterEnum } from "../utils/filterEnum";
import { TodoInput } from "../TodoInput/TodoInput";
import { Filter } from "../Filter/Filter";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [completedFilter, setCompletedFilter] = useState(null);

  // onComponentDidMount
  useEffect(() => {
    // if local storage is empty, save default state there
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(defaultState));
    }
    // otherwise populate the state with data in local storage
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  // onComponentDidUpdate
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedTodosNum = todos.filter((todo) => !todo.isCompleted).length;

  const handleClearClick = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const handleCompleteAllClick = () => {
    setTodos((todos) => {
      todos.map((todo) => (todo.isCompleted = true));
      return [...todos];
    });
  };

  const handleFilterClick = (e) => {
    const val = e.target.id;
    setCompletedFilter(filterEnum[val]);
  };
  return (
    <>
      <TodoInput setTodos={setTodos} />
      {todos
        .filter((todo) =>
          completedFilter === null ? todo : todo.isCompleted === completedFilter
        )
        .map((todo, i) => (
          <Todo
            key={nanoid()}
            id={i}
            task={todo.task}
            isCompleted={todo.isCompleted}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      <button onClick={handleCompleteAllClick}>Complete all</button>
      <button onClick={handleClearClick}>Clear completed</button>
      <Filter handleFilterClick={handleFilterClick} />
      <p>{completedTodosNum} items left</p>
    </>
  );
};

export { Todos };
