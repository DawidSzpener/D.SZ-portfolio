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

  forward = () => {
    this.props.history.push('/list')
  }

  render() {
    setTimeout(this.forward, 5500)
    return (
      <div id='HomepageBg'>
        <h1 id='Imie'>
          <SplitText copy="DAWID SZPENER"/>
        </h1>
        <h1 id='Portfolio'>
          <PortfolioHighlight copy="PORTFOLIO"/>
        </h1>
        <div id="HomepageFace" onClick={() => this.redirect()}>
        </div>
      </div>
    )
  }
}

export default Homepage
