import React from "react";
import './resume.css';

const Resume = () => {


    return (
    <section id="resumeContainer" className="block spacer p-top-xl">
      <div className="wrapper">
        <h2 className="text-left">
            <h2 title="Resume" className="transform-scale-h">
                <span className="line">My Resume</span>
            </h2>
        </h2>
        <div className="row d-flex justify-content-center">

          <div className="resume">
            <a id="resumebtn" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1dCkYTuBtAzhkpdOQVtn4R_aPA5dN__At/view?usp=sharing"
                className="btn btn-outline-secondary btn-sm resumeBtn" role="button" aria-pressed="true">Click Here to Download MY RESUME</a>
            <a href="https://drive.google.com/file/d/1dCkYTuBtAzhkpdOQVtn4R_aPA5dN__At/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
            </a>
          </div>



        </div>
      </div>
      </section>
    );
};

export default Resume;