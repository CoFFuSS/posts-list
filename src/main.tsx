import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.tsx";
import "./index.css";
import ErrorBoundary from "./Components/ErrorBoundary/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
