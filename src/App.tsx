import "./App.css";
import Home from "./components/pages/home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { GlobalStyle } from "./styles/global";

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
