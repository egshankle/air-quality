import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Sensors from "./Sensors";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/sensors">Sensors</Link>
            <Route exact path="/" component={Home} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/sensors" component={Sensors} />
          </div>
        </Router>
    );
  }
}

export default App;
