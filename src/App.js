import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Route exact path="/" component={Home} />
            <Route path="/leaderboard" component={Leaderboard} />
          </div>
        </Router>
    );
  }
}

export default App;
