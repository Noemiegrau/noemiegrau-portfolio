// import './index.css';

import React, {useState} from "react";

import { Viewer } from '@react-pdf-viewer/core';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Worker } from '@react-pdf-viewer/core';
import pdfFile from '../../data/resume/NoemieGrau-TechnicalResume.pdf'

const Resume = () => {

    const [defaultPdfFile] = useState(pdfFile);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
    <section id="resume" className="block spacer p-top-xl">
      <div className="wrapper">
        <h2 className="text-left">
            <h2 title="Resume" className="transform-scale-h">
                <span className="line">My Resume</span>
            </h2>
        </h2>
        <div className="row d-flex justify-content-center">
          <div className="col-6 ">
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
          </div>
        </div>
      </div>
      </section>
    );
};

export default Resume;