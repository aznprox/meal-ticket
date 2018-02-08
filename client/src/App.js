import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Router >
        <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/projects" component={Projects}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
