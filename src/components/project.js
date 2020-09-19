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
      </div>
    );
  }
}

export default Project;
