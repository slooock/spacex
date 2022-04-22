import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/home";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

import { GlobalStyle } from "./styles/global";

const getDesignTokens = () => ({
  palette: {
    mode: "dark",
  },
});

const darkModeTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
