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
          <div id='Github'><a href={this.props.github}><Button>Github</Button></a></div>
          <div id='Website'><a href={this.props.website}><Button>Website</Button></a></div>
        </div>
        <div id="RightSide">
          <div id='Gif'>{this.props.gif}</div>
        </div>
      </div>
    )
  }
}

export default ProjectView
