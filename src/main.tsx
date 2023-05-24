import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalCSS from "./global.style.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCSS />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
