import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import Submit from "./components/Submit";
import All from "./components/All";
import Landing from "./components/Landing";

const App = () => (
  <Router>
    <Switch>
      <div>
        <Route exact path="/all" component={All}/>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/submit" component={Submit}/>
      </div>
    </Switch>
  </Router>
)

export default App;