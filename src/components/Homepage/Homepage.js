import React, { Component } from 'react';
import SplitText from '../UI/SplitText/SplitText'
import PortfolioHighlight from '../UI/PortfolioHighlight/PortfolioHighlight'

import './Homepage.css'

class Homepage extends Component {
  state = {
    loading: true
  }

  render() {
    return (
      <div id='HomepageBg'>
        <h1 style={{fontSize: "3em", padding: "0 25% 0 25%", margin: "5% 0 0 0"}}>
          <SplitText copy=" THE SOFTWARE ENGINEER'S "/>
        </h1>
        <h1 style={{fontSize: "5em", padding: "0 25% 0 24%", margin: "5% 0 0 0"}}>
          <PortfolioHighlight copy="PORTFOLIO"/>
        </h1>
        <div id="HomepageFace">
        </div>
      </div>
    )
  }
}

export default Homepage
