import { createContext } from "react";

const ThemeContext = createContext({
  isDark: null,
  setIsDark: () => {},
});

export { ThemeContext };
