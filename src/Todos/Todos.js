import { nanoid } from "nanoid";
import { React, useEffect, useState } from "react";
import { Todo } from "../Todo/Todo";
import { defaultState } from "../utils/defaultState";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodosFooter } from "../TodosFooter/TodosFooter";
import { TodosHeader } from "../TodosHeader/TodosHeader";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [completedFilter, setCompletedFilter] = useState(null);

  // onComponentDidMount
  useEffect(() => {
    // if local storage is empty, set state to default state
    if (localStorage.getItem("todos") === null) {
      setTodos([...defaultState]); // this will trigger the second useEffect
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

  return (
    <div className="Todos--container">
      <TodosHeader />
      <TodoInput setTodos={setTodos} />
      <div className="Todos--inner-container">
        {todos
          .filter((todo) =>
            completedFilter === null
              ? todo
              : todo.isCompleted === completedFilter
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
        <TodosFooter
          completedTodosNum={completedTodosNum}
          handleClearClick={handleClearClick}
          setCompletedFilter={setCompletedFilter}
          completedFilter={completedFilter}
          handleCompleteAllClick={handleCompleteAllClick}
        />
      </div>
    </div>
  );
};

export { Todos };
