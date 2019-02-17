import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './components/home/index.jsx';
import { Appointment } from './components/appointment/index.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointment" component={Appointment} />
        </>
      </Router>
    );
  }
}

export default App;
