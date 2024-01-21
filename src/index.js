/**
 * @fileOverview Entry point for the React application.
 * @module index
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root for rendering React application into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component inside the StrictMode for development mode checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals (performance metrics) for the application
reportWebVitals();
