import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Markdown from "./components/Markdown";

ReactDOM.render(
  <React.StrictMode>
    <Markdown />
  </React.StrictMode>,
  document.getElementById("root")
);
