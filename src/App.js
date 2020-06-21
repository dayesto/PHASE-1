import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import Landing from "./components/landing";
import ProcessEngr from "./components/ourServices/processEngineering";
import Mecahnical from "./components/ourServices/mechanical";
import Eci from "./components/ourServices/eci";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route
          path="/services/processEngineering"
          exact
          component={ProcessEngr}
        />
        <Route
          path="/services/mechanicalEngineering"
          exact
          component={Mecahnical}
        />
        <Route path="/services/eciEngineering" exact component={Eci} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
