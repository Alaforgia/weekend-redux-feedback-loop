import React from "react";
import axios from "axios";
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Support from "./Support/Support";
import Comments from "./Comments/Comments";
import Review from "../Review/Review";
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
          <Route exact path="/">
            <Feelings />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/comment">
            <Comments />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
