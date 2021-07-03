import React from "react";
import "./Filter.css";
import { filterEnum } from "../utils/filterEnum";
import cx from "classnames";

const Filter = ({ setCompletedFilter, completedFilter }) => {
  const handleFilterClick = (e) => {
    const val = e.target.id;
    setCompletedFilter(filterEnum[val]);
  };

  /* making use of event propagation 🎉 */
  return (
    <div className="Filter--container" onClick={handleFilterClick}>
      <span
        id="all"
        className={cx("Filter--value", {
          "Filter--value-active": completedFilter === null,
        })}
      >
        All
      </span>
      <span
        id="active"
        className={cx("Filter--value", {
          "Filter--value-active": completedFilter === false,
        })}
      >
        Active
      </span>
      <span
        id="completed"
        className={cx("Filter--value", {
          "Filter--value-active": completedFilter === true,
        })}
      >
        Completed
      </span>
    </div>
  );
};

export { Filter };
