import React, { Component } from 'react';
import SplitText from '../UI/SplitText/SplitText'
import './Homepage.css'

class Homepage extends Component {
  state = {
    loading: true
  }

  render() {

    return (
      <div id='HomepageContainer'>
        <div id='HomepageText'>
          <h1 aria-label="Text">
            <span aria-hidden="true">T</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">x</span>
            <span aria-hidden="true">t</span>
          </h1>
        </div>
      </div>
    )
  }
}

export default Homepage
