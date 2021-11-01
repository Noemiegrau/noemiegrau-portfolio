import './resume.css';

import React, {useState} from "react";

// import { Viewer } from '@react-pdf-viewer/core';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import { Worker } from '@react-pdf-viewer/core';
import pdfFile from '../../data/resume/NoemieGrau-TechnicalResume.pdf'

const Resume = () => {

    const [defaultPdfFile] = useState(pdfFile);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
    <section id="resumeContainer" className="block spacer p-top-xl">
      <div className="wrapper">
        <h2 className="text-left">
            <h2 title="Resume" className="transform-scale-h">
                <span className="line">My Resume</span>
            </h2>
        </h2>
        <div className="row d-flex justify-content-center">
          {/* <div className="col-6 ">
            <div  className="pdf-container">
              {defaultPdfFile &&
              <>
                <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js">
                  <Viewer  fileUrl={defaultPdfFile}
                    plugins={[defaultLayoutPluginInstance]} />
                </Worker>
              </>}
            </div>
            <p>Download my <a className="pdf-link" href={defaultPdfFile} download><span className="line">RESUME</span></a></p>
          </div> */}


          <div className="resume">
            <a id="resumebtn" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1dCkYTuBtAzhkpdOQVtn4R_aPA5dN__At/view?usp=sharing"
                className="btn btn-outline-secondary btn-sm resumeBtn" role="button" aria-pressed="true">Click Here to Download MY RESUME</a>
            <a href="https://drive.google.com/file/d/1dCkYTuBtAzhkpdOQVtn4R_aPA5dN__At/view?usp=sharing" target="_blank" rel="noreferrer" >
            </a>
          </div>



        </div>
      </div>
      </section>
    );
};

export default Resume;