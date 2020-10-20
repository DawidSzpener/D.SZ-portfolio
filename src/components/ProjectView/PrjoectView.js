import React, { Component } from 'react';
import './ProjectView.css'

class ProjectView extends Component {

  render() {
    return(
      <div id="ProjectViewContainer">
        <div id="LeftSide">
          <div id='Title'>{this.props.title}</div>
          <div id='Github'>{this.props.github}</div>
          <div id='Website'>{this.props.website}</div>
          <div id='Description'>{this.props.description}</div>
        </div>
        <div id="RightSide">
          <div id='Gif'>{this.props.gif}</div>
        </div>
      </div>
    )
  }
}

export default ProjectView
