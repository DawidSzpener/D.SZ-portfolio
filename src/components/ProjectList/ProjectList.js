import React, { Component } from 'react';
import '../ProjectList/ProjectList.css';
import Bg1 from '../../assets/images/bg1.jpg'
import CSS from '../../assets/images/Cellular-Automaton.gif'
import ProjectView from '../ProjectView/PrjoectView'
import Backdrop from '../UI/Backdrop/Backdrop'
import Card from '../UI/Card/Card'

class ProjectList extends Component {
  state = {
    projects: [
      {title: "CELLULAR AUTOMATON", background: CSS, gif: CSS, github: 'https://github.com/Hyan18/the-css', website: 'https://the-css.herokuapp.com/', description: "Cellular Automata - single player game, evolution dependant on initial state. Using Conway's game of life you can solve puzzles on a single page web app"},
      {title: "RICIPICI", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 2"},
      {title: "SIMPLE ASSET TRACKER", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 3"},
      {title: "BURGER BUILDER", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 4"},
      {title: "ACEBOOK", background: Bg1, gif: "gif", github: "url", website: "url", description: "to jest project 4"}
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
        <div  id="LeftSide"> 
          <div id="AboutMe">

          </div>
        </div>
        <div id="RightSideList">
        {this.state.projects.map(project => {
          return (
            <Card
              key={project.title}
              title={project.title}
              background={project.background}
              clicked={() => this.showProject(project)} />
            )
        })}
        <div style={{paddingBottom: '4%'}}></div>
        </div>
      </div>
    )
  }
}

export default ProjectList
