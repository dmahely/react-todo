import React from "react";

const Filter = ({ handleFilterClick }) => {
  /* making use of event propagation 🎉 */
  return (
    <div onClick={handleFilterClick}>
      <button id="all">All</button>
      <button id="active">Active</button>
      <button id="completed">Completed</button>
    </div>
  );
};

export { Filter };
