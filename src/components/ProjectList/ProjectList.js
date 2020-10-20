import React, { Component } from 'react';
import '../ProjectList/ProjectList.css';
import Bg1 from '../../assets/images/bg1.jpg'
import ProjectView from '../ProjectView/PrjoectView'
import Backdrop from '../UI/backdrop/Backdrop'

class ProjectList extends Component {
  state = {
    projects: [
      {title: "project 1", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 1"},
      {title: "project 2", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 2"},
      {title: "project 3", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 3"},
      {title: "project 4", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 4"}
    ],
    enlarge: false,
    enlargedProject: {
      title: '',
      github: '',
      website: '',
      description: '',
      background: '',
      gif: ''
    }
  }

  showProject = (project) => {
    this.setState({ 
      enlarge: true,
      enlargedProject: {
        title: project.title,
        github: project.github,
        website: project.website,
        description: project.description,
        background: project.background,
        gif: project.gif
      }
    })
  }

  hideProject = () => {
    this.setState({ enlarge: false })
  }

  render() {
    let enlargedProject = null
    if (this.state.enlarge) {
      enlargedProject = 
      <div>
        <Backdrop clicked={() => this.hideProject()} show={this.state.enlarge}/>
        <ProjectView
        className="Card"
        onClick={() => this.showProject()}
        title={this.state.enlargedProject.title}
        github={this.state.enlargedProject.github}
        website={this.state.enlargedProject.website}
        description={this.state.enlargedProject.description}
        gif={this.state.enlargedProject.gif}
        background={this.state.enlargedProject.background}
        /> 
      </div>
    }

    return(
      <div id="ProjectListContainer">
        {enlargedProject}
        {this.state.projects.map(project => {
          return <div className="Card" key={project.title} onClick={() => this.showProject(project)}>
              <img src={project.background} alt="card_bg"></img>
            </div>
        })}
      </div>
    )
  }
}

export default ProjectList
