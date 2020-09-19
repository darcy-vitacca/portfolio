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
                <Link to="/">
                  <p>Logo</p>
                </Link>
              </div>
              <div className="nav-menu">
                <img id="menu" src={require("./images/white-menu.png")}></img>
                <a className="nav-links">About</a>
                <a className="nav-links">Portfolio</a>
                <a className="nav-links">Contact</a>
              </div>
            </div>
          </nav>
        </header>

        <div className="banner">
          <div className="bannerText">
            <h1>Hello!</h1>
            <h1>I'm Darcy Vitacca and I'm a Full Stack Developer!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed accumsan est. Suspendisse accumsan eleifend metus et dapibus.
              Praesent erat orci, egestas non justo sed, volutpat egestas dolor.
            </p>
            <button className="hireButton">Hire Me</button>
          </div>
        </div>
        <div className="container">
          <div className="projectsContainer">
            <h1 className="projectsHeader">Portfolio</h1>
            <div className="projectsSection">
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </div>

          <div className="contactSection">
            <h1>Contact</h1>
            <Contact />
          </div>
        </div>
  
      </div>
    </Router>
  );
}

export default App;
