import React from "react";
import axios from "axios";
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <div>
          {/* Feelings component */}
          <Route path="/">
            <Feelings />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
