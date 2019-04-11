import React, { Component } from 'react';
import './App.scss';

import Dashboard from './pages/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Dashboard />
      </div>
    );
  }
}

export default App;
