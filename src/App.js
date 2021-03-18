import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ProjectList from './components/ProjectList/ProjectList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={ProjectList} />
        </Switch>
      </div>
    );
  }
}

export default App;
