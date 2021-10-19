import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

const Background = () => {
    return (
        <div id="background" className="block spacer m-top-xl">
            <h2>
                <span className="line">Background</span>
            </h2>

            <p>User Interface includes several classes of background style.</p>

            <PrismCode
                code={ '' +
                '<div className="bg-gray"></div>\n' +
                '<div className="bg-gray-light"></div>\n' +
                '<div className="bg-gray-dark"></div>\n' +
                '\n' +
                '<div className="bg-half-ring-center"></div>\n' +
                '<div className="bg-half-ring-left"></div>\n' +
                '<div className="bg-half-ring-right"></div>\n' +
                '<div className="bg-half-ring-up"></div>\n' +
                '<div className="bg-half-ring-center"></div>\n' +
                '\n' +
                '<div className="bg-line"></div>\n' +
                '<div className="bg-fixed"></div>' +
                '' }
                language="html"
                plugins={ ["line-numbers"] }
            />

        </div>
    );
};

export default Background;
