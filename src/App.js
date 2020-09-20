import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Project from "../src/components/project";
import Contact from "../src/components/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <div className="nav-header">
              <div className="logo">
                <Link to="/" className="nav-links">
                  <a className="nav-links">Darcy Vitacca</a>
                </Link>
              </div>
              <div className="nav-menu">
                <img id="menu" src={require("./images/white-menu.png")}></img>
                <div className="navLinks">
                  <a className="nav-links">About</a>
                  <a className="nav-links">Portfolio</a>
                  <a className="nav-links">Contact</a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="banner">
          <div className="bannerText">
            <h1>Hello!</h1>
            <h1 className="bannerHeaderText">
              I'm Darcy Vitacca and I'm a Full Stack Developer!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed accumsan est. Suspendisse accumsan eleifend metus et dapibus.
              Praesent erat orci, egestas non justo sed, volutpat egestas dolor.
            </p>
            <button className="hireButton">Hire Me</button>
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
            <h1 className="projectsHeader">Portfolio</h1>
            <div className="projectsSection">
              <Project />
              <Project />
              <Project />
            </div>
          </div>
          <div className="bottomImageDiv">
            <img
              className="bottomImage"
              src={require("./images/backimg2001.png")}
            ></img>
          </div>

          <div className="contactSection">
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

export default App;
