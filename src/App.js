import "./App.css";
import { useState } from "react";
import { Todos } from "./Todos/Todos";
import { ThemeContext } from "../src/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = { isDark, setIsDark };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Todos />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
