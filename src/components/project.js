import React, { Component } from "react";

const Project = (props) => {
  return props.projects.map((val, idx) => {
    // console.log(val.projectImg)
    return (
      <div className="projectComponent">
        <div className="projectComponentBkg">
          <div className="projectsHeaderTop">
            <h1>{val.projectName}</h1>
            <div>
              <a href={val.projectGithub}>
                <img
                  className="iconFork"
                  src={require("../images/githubsymbol.png")}
                ></img>
              </a>
              <a href={val.projectSite}>
                <img
                  className="icon"
                  src={require("../images/newtab.png")}
                ></img>
              </a>
            </div>
          </div>
        </div>

        <img className="projectImg" src={val.projectImg}></img>

        <p className="projectDesc">{val.projectDesc}</p>
        <p className="projectLang"> {val.projectLanguages}</p>
      </div>
    );
  });
};

export default Project;
