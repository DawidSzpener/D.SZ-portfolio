import React, { Component } from 'react';

import SplitText from '../UI/SplitText/SplitText'
import PortfolioHighlight from '../UI/PortfolioHighlight/PortfolioHighlight'
import './Homepage.scss'

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
      <div className='Homepage'>
        <h1 className='Homepage__name'>
          <SplitText copy="DAWID SZPENER"/>
        </h1>
        <h1 className='Homepage__title'>
          <PortfolioHighlight copy="PORTFOLIO"/>
        </h1>
        <div className="Homepage__face" onClick={() => this.redirect()}>
        </div>
      </div>
    )
  }
}

export default Homepage
