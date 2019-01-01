import React, { Component } from 'react';
import SplitText from '../UI/SplitText/SplitText'
import PortfolioHighlight from '../UI/PortfolioHighlight/PortfolioHighlight'
import './Homepage.css'

class Homepage extends Component {
  state = {
    loading: true
  }

  redirect = () => {
    this.props.history.push('/list')
  }

  render() {
    return (
      <div id='HomepageBg'>
        <h1 style={{fontSize: "3.5vw", padding: "0 25% 0 25%", margin: "5% 0 0 0"}}>
          <SplitText copy="DAWID SZPENER"/>
        </h1>
        <h1 style={{fontSize: "8vw", padding: "0 10% 0 10%", margin: "5% 0 0 0"}}>
          <PortfolioHighlight copy="PORTFOLIO"/>
        </h1>
        <div id="HomepageFace" onClick={() => this.redirect()}>
        </div>
      </div>
    )
  }
}

export default Homepage
