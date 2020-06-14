import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Landing from "./components/landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Landing />
      </div>
    </Router>
  );
}

export default App;
