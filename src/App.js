import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
