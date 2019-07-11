import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader } from '../public/index.html';
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';
import Nav from "./components/Nav"
import Home from "./pages/Home";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
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
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }

  // chat app
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {    
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();      
      if (newMessage === 'fruits') {
        setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
      />
    );
  }
}

export default App;