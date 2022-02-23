import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "context";
import { loadServer, DevTools } from "jira-dev-tool";
import "antd/dist/antd.less";
import App from "./App";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
        <DevTools />
        <App />
      </AppProvider>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
