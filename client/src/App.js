import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';
import Nav from "./components/Nav"
import Home from "./pages/Home";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NoMatch from "./pages/NoMatch";
// import "./App.css";

class App extends Component {
  
  componentDidMount() {
    //Auto initialize all materialize components
    M.AutoInit();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results/:role" component={Results} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/chat" component={Chat} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
