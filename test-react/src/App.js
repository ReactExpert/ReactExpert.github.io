import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Organizations from './pages/Organizations';
import Influencers from './pages/Influencers';
import Goals from './pages/Goals';
import Events from './pages/Events';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Organizations}/>
          <Route path="/influencers" component={Influencers}/>
          <Route path="/goals" component={Goals}/>
          <Route path="/events" component={Events}/>
        </div>
      </Router>
    );
  }
}

export default App;
