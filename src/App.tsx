import { ThemeProvider } from "styled-components";
import type { RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux/es/exports";
import GlobalCSS from "./global.style.ts";
import Routes from "./routes/Routes";
import { darkMode, lightMode } from "./styles/themes.style";
import { AUTH } from "./config/firebase.ts";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout } from "./store/slices/userSlice.ts";

function App() {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(AUTH, (user) => {
      if (user?.uid) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubsribe;
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
      <GlobalCSS />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
