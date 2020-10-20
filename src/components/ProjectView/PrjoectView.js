import React, { Component } from 'react';
import './ProjectView.css'

class ProjectView extends Component {

  render() {
    return(
      <div id="ProjectViewContainer">
        <div>
          <div>{this.props.title}</div>
          <div>{this.props.github}</div>
          <div>{this.props.website}</div>
          <div>{this.props.description}</div>
        </div>
        <div>{this.props.gif}</div>
      </div>
    )
  }
}

export default ProjectView
