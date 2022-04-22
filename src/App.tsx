import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/home";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
