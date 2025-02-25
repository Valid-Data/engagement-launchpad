
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// WordPress typically serves from a subdirectory, so we need to consider the basename
const basename = import.meta.env.VITE_WP_PATH || '/wp-content/themes/egov-kalender';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
