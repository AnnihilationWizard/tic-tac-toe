import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import TicTacToe from "./TicTacToe";
import theme from "./themes";

const defaultTheme = Object.keys(theme)[0];

function App() {
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <TicTacToe />
    </ThemeProvider>
  );
}

export default App;
