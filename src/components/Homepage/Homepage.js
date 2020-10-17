import React, { Component } from 'react';
import SplitText from '../UI/SplitText/SplitText'
import './Homepage.css'

class Homepage extends Component {
  state = {
    loading: true
  }

  render() {
    return (
      <div id='HomepageText'>
        <h1>
          <SplitText copy="WITAM JESTEM DAWID"/>
        </h1>
      </div>
    )
  }
}

export default Homepage
