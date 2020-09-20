import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="projectComponent">
        <div className="projectComponentBkg">
          <h1>Project</h1>
          <img className="projectImg" src={require('../images/tradeconnect.png')}></img>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            accumsan est. Suspendisse accumsan eleifend metus et dapibus.
            Praesent erat orci, egestas non justo sed, volutpat egestas dolor.
          </p>
          <p>React, Express</p>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/darcy-vitacca/">
                <img
                  className="iconFork"
                  src={require("../images/githubsymbol.png")}
                ></img>
              </a>
              <a href="https://github.com/darcy-vitacca">
                <img
                  className="icon"
                  src={require("../images/newtab.png")}
                ></img>
              </a>

        </div>
      </div>
    );
  }
}

export default Project;
