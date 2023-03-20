import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import ResetStyle from "./styles/ResetStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  {/* Desabilitado StrictMode para alguns avisos não rodarem duas vezes! */}
    <ResetStyle />
    <GlobalStyle />
    <App />
  </>
);
