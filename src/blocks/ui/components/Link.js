import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';


const Link = () => {
    return (
        <div id="link" className="block spacer m-top-xl">
            <h2>
                <span className="line">Link</span>
            </h2>

            <p>User Interface includes custom made classes for links. The link can be without a hover or with scalable hover.</p>

            <div className="bd-example">
                <a title="Link" className="btn btn-link border-0 p-0" href="#link">Link</a>
                <a title="Link hover scale" className="btn btn-link border-0 p-0 transform-scale-h" href="#link">Link hover scale</a>
            </div>

            <PrismCode
                code={ '' +
                '<a title="Link" className="btn btn-link border-0 p-0" href="#">Link</a>\n' +
                '<a title="Link hover scale" className="btn btn-link border-0 p-0 transform-scale-h" href="#">Link hover scale</a>' +
                '' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Link;
