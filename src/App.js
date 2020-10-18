import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import ProjectList from './components/ProjectList/ProjectList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/list' component={ProjectList} />
        </Switch>
      </div>
    );
  }
}

export default App;
