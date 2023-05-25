import { ThemeProvider } from "styled-components";
import type { RootState } from "./store/store";
import { useSelector } from "react-redux/es/exports";
import Routes from "./routes/Routes";
import { darkMode, lightMode } from "./styles/themes.style";

function App() {
  const theme = useSelector((state: RootState) => state.themes.mode);

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <Routes />;
    </ThemeProvider>
  );
}

export default App;
