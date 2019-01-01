import React, { Component } from 'react';
import './ProjectView.css'
import Button from '../UI/Button/Button'

class ProjectView extends Component {

  redirect = () => {
    this.props.history.push(this.props.github)
  }

  render() {
    return(
      <div id="ProjectViewContainer">
        <div id="LeftSide">
          <div id='Title'>{this.props.title}</div>
          <div id='Description'>{this.props.description}</div>
          <div id='Github'><Button clicked={() => this.redirect()}>Github</Button></div>
          <div id='Website'><Button>Website</Button></div>
        </div>
        <div id="RightSide">
          <div id='Gif'>{this.props.gif}</div>
        </div>
      </div>
    )
  }
}

export default ProjectView
