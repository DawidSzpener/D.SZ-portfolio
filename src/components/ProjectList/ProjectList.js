import React, { Component } from 'react';

import CSS from '../../assets/images/Cellular-Automaton.gif'
import Burger from '../../assets/images/burger.gif'
import Ricipici from '../../assets/images/ricipici.gif'
import Acebook from '../../assets/images/acebook.gif'
import SAS from '../../assets/images/sas.gif'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/linkedin.png'

import '../ProjectList/ProjectList.scss';

import ProjectView from '../ProjectView/PrjoectView.js'
import AboutMe from '../AboutMe/AboutMe.js'

class ProjectList extends Component {
  state = {
    projects: [
      {title: "CELLULAR AUTOMATON", technology: "Javascript, React.js, MongoDB, Express, Node, Jest", background: CSS, gif: CSS, github: 'https://github.com/Hyan18/the-css', website: 'https://the-css.herokuapp.com/', description: "A single player game, evolution dependant on initial state. Using Conway's game of life you can solve puzzles on a single page web app"},
      {title: "RICIPICI", technology: "Javascript, React.js, Node, Firebase, Redux, Sass, Jasmine", background: Ricipici, gif: Ricipici, github: "https://github.com/DawidSzpener/Ripicipi", website: "https://ricipici.herokuapp.com/", description: "An E-notebook full of various cooking recipes seperated by categories, with an option to add you'r own dishes to the menu"},
      {title: "SIMPLE ASSET TRACKER", technology: "Python, Javascript, Django, PostgreSQL, Selenium, React.js, Bootstrap, Python unittest", background: SAS, gif: SAS, github: "https://github.com/makersacademy/simpleassettracker", website: "https://simple-asset-tracker.herokuapp.com/", description: "Simplest way to track a company's physical assets. Built with smaller start-ups in mind - where you don't need a load of fancy features"},
      {title: "BURGER BUILDER", technology: "Javascript, React.js, Redux, Node, Firebase, Jasmine", background: Burger, gif: Burger, github: "https://github.com/DawidSzpener/Burger", website: "https://burger-dsz.herokuapp.com/", description: "Build you'r own burger and order it online right to you'r hands, no need to leave the comfort of you'r house."},
      {title: "ACEBOOK", technology: "Ruby, Ruby on Rails, PostgreSQL, Capybara, Selenium", background: Acebook, gif: Acebook, github: "https://github.com/Hyan18/acebook-luckerberg", website: "https://acebook-luckerberg.herokuapp.com/", description: "Facebook clone, built during The Makers Academy course with a group of amazing people. Register, login and post or comment under you'r friends topics."}
    ],
    enlarge: false,
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

  render() {

    return(
      <div className="ProjectList">
        <div className="ProgressBar"/>
        <div className="Name">
          <span className="Name-name">Dawid Szpener</span>
          <div className="Name-bg"></div>
        </div>
        <div className="SideDrawer">
          <div className="SideDrawer__SocialMedia">

          <a className="icon" href="https://www.linkedin.com/in/dawid-szpener-b853021a1/" target="_blank" rel="noopener noreferrer">
            <img alt="linkedin" src={linkedin} />
            <div className="tooltip">
              LinkedIn
            </div>
          </a>

          <a className="icon" href="https://github.com/DawidSzpener" target="_blank" rel="noopener noreferrer">
            <img alt="github" src={github} />
            <div className="tooltip">
              Github
            </div>
          </a>

          <a className="icon" href="https://www.instagram.com/dawidek2909/" target="_blank" rel="noopener noreferrer">
            <img alt="instagram" src={instagram} />
            <div className="tooltip">
              Instagra
            </div>
          </a>

          <a className="icon" href="https://www.facebook.com/dawid.szpener.5" target="_blank" rel="noopener noreferrer">
            <img alt="facebook" src={facebook} />
            <div className="tooltip">
              Facebook
            </div>
          </a>

          </div>
        </div>
        <div  className="ProjectList__LeftSide"> 
          <div className="ProjectList__LeftSide__AboutMe">
            <AboutMe/>
          </div>
        </div>
        <div className="Name" style={{marginTop: '630px'}}>
          <span className="Name-web">Web developer</span>
          <div className="Name-web-bg"></div>
        </div>
        <div className="HelloContainer">
          <div className="HelloContainer__Left">
            <h3 style={{fontSize: '2em', letterSpacing: '0px', lineHeight: '40px'}}>Hello!</h3>
            <h4 className="HelloContainer--text">
              I’m passionate about CSS animations, web development and design.
              Designing and creating my own projects allows me to explore and express my creativity and inner world.
              I've been a web developer and integrator for nearly 2 years.
              Lover of the planet, nature, animals, food, music and people. I add passion and respect to everything I do.
              I spend most of my spare time reading, playing board games, cooking or tinkering with my projects. 
              I am very dedicated towards achieving my goals whether it's work or life.
              I have been developing a recipe website (Ricipici) for over a year now using React.js.
              I believe what brings expertise and mastery is not your skills but your hard work and passion.
            </h4>
          </div>
          <div className="HelloContainer__Right">
            <h3 style={{fontSize: '2em', letterSpacing: '0px', lineHeight: '40px'}}>A little bit more background</h3>
            <h4 className="HelloContainer--text">
              I started my adventure as a developer in 2019 in London as a Ruby on Rails developer.
              I explored areas like frontend, backend, JS, agile (SCRUM), hosting, or web design.
              I lean towards the visual and artistic. I've been focusing on responsive web design, HTML5, CSS3, React.js, some backend and user interactions.
              I love looking from the user's eyes, deepening, empathizing with them, and challenging myself to develop creative solutions.
              Indeed that's why I fell in love with Design Thinking, which seeks to understand the user, challenges all assumptions, and aims to find answers that seemed invisible at first glance.
              Last but not least, I'm available for hire on freelance projects.
            </h4>
          </div>
        </div>
        <div className="ProjectList__RightSide">
          <h3 style={{marginTop: '50px'}}>PROJECTS</h3>
          {this.state.projects.map(project => {
            return (
              <ProjectView
                key={project.title}
                className="Card"
                technology={project.technology}
                title={project.title}
                github={project.github}
                website={project.website}
                description={project.description}
                gif={project.gif}
                background={project.background}
              /> 
              )
          })}
        <div className='Bottom'></div>
        </div>
      </div>
    )
  }
}

export default ProjectList
