import React, { Component } from 'react';
import '../ProjectList/ProjectList.css';
import CSS from '../../assets/images/Cellular-Automaton.gif'
import Burger from '../../assets/images/burger.gif'
import Ricipici from '../../assets/images/ricipici.gif'
import Acebook from '../../assets/images/acebook.gif'
import SAS from '../../assets/images/sas.gif'
import ProjectView from '../ProjectView/PrjoectView.js'
import Backdrop from '../UI/Backdrop/Backdrop.js'
import Card from '../UI/Card/Card.js'
import AboutMe from '../AboutMe/AboutMe.js'

class ProjectList extends Component {
  state = {
    projects: [
      {title: "CELLULAR AUTOMATON", background: CSS, gif: CSS, github: 'https://github.com/Hyan18/the-css', website: 'https://the-css.herokuapp.com/', description: "A single player game, evolution dependant on initial state. Using Conway's game of life you can solve puzzles on a single page web app"},
      {title: "RICIPICI", background: Ricipici, gif: Ricipici, github: "https://github.com/DawidSzpener/Ripicipi", website: "https://ricipici.herokuapp.com/categories", description: "An E-notebook full of various cooking recipes seperated by categories, with an option to add you'r own dishes to the menu"},
      {title: "SIMPLE ASSET TRACKER", background: SAS, gif: SAS, github: "https://github.com/makersacademy/simpleassettracker", website: "https://simple-asset-tracker.herokuapp.com/", description: "Simplest way to track a company's physical assets. Built with smaller start-ups in mind - where you don't need a load of fancy features"},
      {title: "BURGER BUILDER", background: Burger, gif: Burger, github: "https://github.com/DawidSzpener/Burger", website: "https://burger-dsz.herokuapp.com/", description: "Build you'r own burger and order it online right to you'r hands, no need to leave the comfort of you'r house."},
      {title: "ACEBOOK", background: Acebook, gif: Acebook, github: "https://github.com/Hyan18/acebook-luckerberg", website: "https://acebook-luckerberg.herokuapp.com/", description: "Facebook clone, built during The Makers Academy course with a group of amazing people. Register, login and post or comment under you'r friends topics."}
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
        <div  id="LeftSideList"> 
          <div id="AboutMe">
            <AboutMe/>
          </div>
        </div>
        <div id="RightSideList">
          <h3 style={{position: 'fixed'}}>PROJECTS</h3>
          {this.state.projects.map(project => {
            return (
              <Card
                key={project.title}
                title={project.title}
                background={project.background}
                clicked={() => this.showProject(project)} />
              )
          })}
        <div id='Bottom'></div>
        </div>
      </div>
    )
  }
}

export default ProjectList
