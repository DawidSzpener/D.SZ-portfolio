import React, { Component } from 'react';
import './Homepage.css'

class Homepage extends Component {
  state = {
    loading: true
  }

  render() {

    return (
      <div className='HomepageContainer'>
        <div className='HomepageText'>
          HELLO
          {/* MY NAME IS DAWID */}
          {/* I AM A WEB ENGINEER */}
          {/* ARROW */}
        </div>
      </div>
    )
  }
}

export default Homepage
