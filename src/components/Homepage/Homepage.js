import React, { Component } from 'react';
import SplitText from '../UI/SplitText/SplitText'
import './Homepage.css'

class Homepage extends Component {
  state = {
    loading: true
  }

  render() {
    return (
      <div id='HomepageBg'>
        <h1 style={{fontSize: "8em"}}>DAWID SZPENER</h1>
        <h1 style={{fontSize: "5em", padding: "0 25% 0 25%", width: "50%"}}>
          <SplitText copy=" THE SOFTWARE ENGINEER "/>
        </h1>
      </div>
    )
  }
}

export default Homepage
