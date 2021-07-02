import React, { useContext } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import "./TodosHeader.css";
import { ThemeContext } from "../ThemeContext";

const TodosHeader = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleClick = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <div className="TodosHeader--container">
      <h1 className="TodosHeader--title">Todo</h1>
      <img
        className="TodosHeader--theme-icon"
        onClick={handleClick}
        src={isDark ? sun : moon}
        alt="Theme toggle icon"
      />
    </div>
  );
};

export { TodosHeader };
