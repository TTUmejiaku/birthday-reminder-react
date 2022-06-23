import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

function Birthday() {
  return (
    <>
      <App />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Birthday tab="home" />);
// ReactDOM.render(<Birthday />, document.getElementById("root"));
