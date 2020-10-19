import React, { Component } from 'react';
import '../ProjectList/ProjectList.css';
import Bg1 from '../../assets/images/bg1.jpg'
import ProjectView from '../ProjectView/PrjoectView'

class ProjectList extends Component {
  state = {
    projects: [
      {title: "project 1", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 1"},
      {title: "project 2", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 2"},
      {title: "project 3", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 3"},
      {title: "project 4", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 4"}
    ],
    enlarge: false,
  }

  showProject = () => {
    this.setState({ enlarge: true })
  }

  hideProject = () => {
    this.setState({ enlarge: false })
  }

  render() {
    let enlargedProject = null
    if (this.state.enlarge) {
      enlargedProject = <h1>lol</h1>
    }

    return(
      <div id="ProjectListContainer">
        {enlargedProject}
        {this.state.projects.map(project => {
          return <div className="Card" onClick={() => this.showProject()}>
              <img src={project.background} alt="card_bg"></img>
            </div>
        })}
      </div>
    )
  }
}

export default ProjectList
