import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    links: {
        color: "#fff",
        textDecoration: "none",
        marginRight: "40px"
    }
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <CssBaseline>
              <Router>
                <div>
                  <AppBar position="static">
                    <Toolbar>
                      <Typography variant="h6" color="inherit">
                        <Link to="/" className={classes.links}>Home</Link>
                      </Typography>
                      <Typography variant="h6" color="inherit">

                        <Link to="/leaderboard" className={classes.links}>Leaderboard</Link>
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Route exact path="/" component={Home} />
                  <Route path="/leaderboard" component={Leaderboard} />
                </div>
              </Router>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
