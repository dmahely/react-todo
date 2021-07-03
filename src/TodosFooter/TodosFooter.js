import { Filter } from "../Filter/Filter";
import React from "react";
import "./TodosFooter.css";

const TodosFooter = ({
  handleCompleteAllClick,
  handleClearClick,
  setCompletedFilter,
  completedFilter,
  completedTodosNum,
}) => {
  return (
    <div className="TodosFooter--container">
      <div className="TodosFooter--row">
        <span className="TodosFooter--completedTodos">
          {completedTodosNum} {completedTodosNum > 1 ? "items" : "item"} left
        </span>
        <span
          className="TodosFooter--complete-all"
          onClick={handleCompleteAllClick}
        >
          Complete all
        </span>
        <span className="TodosFooter--clear-all" onClick={handleClearClick}>
          Clear completed
        </span>
      </div>
      <div className="TodosFooter--row">
        <Filter
          setCompletedFilter={setCompletedFilter}
          completedFilter={completedFilter}
        />
      </div>
    </div>
  );
};

export { TodosFooter };
