import React, { Component } from 'react';

import './ProjectView.scss'
import Button from '../UI/Button/Button'


class ProjectView extends Component {

  redirect = () => {
    this.props.history.push(this.props.github)
  }

  render() {
    return(
      <div className="ProjectViewContainer">
        <div className="LeftSide">
          <div className='LeftSide__Title'>{this.props.title}</div>
          <div className='LeftSide__Technology'>{this.props.technology}</div>
          <div className='LeftSide__Description'>{this.props.description}</div>
          <div className='LeftSide__Github'><a href={this.props.github}><Button>Github</Button></a></div>
          <div className='LeftSide__Website'><a href={this.props.website}><Button>Website</Button></a></div>
        </div>
        <div className="RightSide">
          <div className='RightSide__Gif'><img style={{borderRadius: '6px'}} src={this.props.gif} alt="gif"></img></div>
        </div>
      </div>
    )
  }
}

export default ProjectView
