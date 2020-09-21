import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Project from "../src/components/project";
import Contact from "../src/components/contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: "show-desktop hide-mobile nav-links",
      projects: [
        {
          projectName: "TradeConnect",
          projectImg: require('./images/tradeconnect.png'),
          projectDesc: "TradeConnect is a full stack Job website that’s  a mix between Linkedin and Seek for the Trade Industry. You can create an account, create a profile for employers to view, post job ads for people to apply to, search for either jobs or employees, send messages/ resumes/ other documents to prospects through an inbox system and manage your current job ads on the job dashboard. It’s fully responsive and you can edit your profile or  jobs as well as many other things.",
          projectLanguages: "REST API server using Node.js, Express, Firebase (Authentication, NoSQL DB, Cloud functions, Hosting, Image/Document uploading) Frontend : Javascript (ES6), React, Redux, Express HTML, CSS",
          projectGithub: "https://github.com/darcy-vitacca/tradeconnectfull",
          projectSite: "https://trade-connect.com.au/",
        },
        {
          projectName: "Twitview",
          projectImg: require('./images/twitview1.png'),
          projectDesc: "Twitview is a Chrome Extension that makes calls on behalf of the user to the Twitter API and sorts through relevant data related to a twitter thread. It compiles long twitter threads in a clear and concise manner and displays the authors tweet thread in a popup modal instantly.The call is made to the server for access tokens for the API and then it displays the information the user is after in a modal once received from twitter. It has 120 users at the time of writing this",
          projectLanguages: "Javascript, HTML, CSS, Node.js ",
          projectGithub: "https://github.com/darcy-vitacca/TwitviewFinal",
          projectSite: "https://chrome.google.com/webstore/detail/twitview-thread-unrollrea/ljdegdmkjoondijjmadjgammcbphodjl?hl=en",
        },
        {
          projectName: "ErgoActive",
          projectImg: require('./images/ergoactive.png'),
          projectDesc: "A chrome extension that gives you intervals to help you move at your desk to prevent health issues. The timer allows users to fully customize their intervals they want to spend between sitting, standing, being active and drinking water while at a desk. It has a timer running in the background script of the browser which communicates to the front end after it’s started, and persists when closed. When the user sets preferences in the frontend modal they are stored in the browser so their preferences are always remembered on opening of the browser.",
          projectLanguages: "Javascript, HTML, CSS ",
          projectGithub: "https://github.com/darcy-vitacca/ergoActive",
          projectSite: "https://chrome.google.com/webstore/detail/ergoactive-desk-health-as/hojblecddbmjknoadlpiimahhnfmlmkh?hl=en",
        },
      ],
    };
  }
  handleClick = (e) => {
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(this.state.menu);
    if (e.target.id === "menu") {
      this.setState({
        menu: "show-desktop nav-links",
      });
    }
    if (e.target.id === "exit_menu") {
      this.setState({
        menu: "show-desktop hide-mobile nav-links",
      });
    }
    if (
      e.target.className === "nav-links" &&
      this.state.menu === "show-desktop nav-links"
    ) {
      this.setState({
        menu: "show-desktop hide-mobile nav-links",
      });
    }
  };
  
  render() {
    let { menu } = this.state;
    return (
      <Router>
        <div className="App">
          <header>
            <a href="#about" className="nav-links logo">
              Darcy Vitacca
            </a>
            <nav>
              <a className="hide-desktop">
                <img
                  id="menu"
                  src={require("./images/white-menu.png")}
                  alt="toggleMenu"
                  className="menu"
                  onClick={this.handleClick}
                ></img>
              </a>
              <ul class={menu} id="nav">
                <li
                  className="exit-btn hide-desktop"
                  alt="exit menu"
                  id="exit_menu"
                  onClick={this.handleClick}
                >
                  &#10005;
                </li>
                <li>
                  <a
                    className="nav-links"
                    href="#about"
                    onClick={this.handleClick}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="nav-links"
                    href="#portfolio"
                    onClick={this.handleClick}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="nav-links"
                    href="#contact"
                    onClick={this.handleClick}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <div className="banner" id="about">
            <div className="bannerText">
              <h1>Hello!</h1>
              <h1 className="bannerHeaderText">
                I'm Darcy Vitacca and I'm a Full Stack Developer!
              </h1>
              <p>
                I have a passion for creating ideas and seeing them through,
                software engineering has unlocked all the possibilities . It is
                the vehicle to which I can create my ideas and is why I enjoy it
                so much. My skills and areas of interest are in Full Stack Web
                Development but all areas of software engineering excite me. My
                technical skills are based around these languages/frameworks:
                Vanilla Js, JavaScript(ES6), React, Redux, REST APIs, Node.Js,
                Express, Firebase, NoSQL, HTML, CSS.
              </p>
              <button
                className="hireButton"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Hire Me
              </button>
              <div className="contactSocialsDiv">
                <a href="https://www.linkedin.com/in/darcy-vitacca/">
                  <img
                    className="icon"
                    src={require("./images/linkedin-sign.png")}
                  ></img>
                </a>
                <a href="https://github.com/darcy-vitacca">
                  <img
                    className="icon"
                    src={require("./images/github.png")}
                  ></img>
                </a>
                <a href="https://twitter.com/darcyvitacca_">
                  <img
                    className="icon"
                    src={require("./images/twitter.png")}
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="projectsContainer">
              <h1 className="projectsHeader" id="portfolio">
                Portfolio
              </h1>
              <div className="projectsSection">
                <Project projects={this.state.projects}/>
              </div>
            </div>
            <div className="bottomImageDiv">
              <img
                className="bottomImage"
                src={require("./images/backimg2001.png")}
              ></img>
            </div>

            <div className="contactSection" id="contact">
              <Contact />
            </div>
          </div>
          <div className="bottomImageDiv2">
            <img
              className="bottomImage2"
              src={require("./images/backimg201.png")}
            ></img>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
