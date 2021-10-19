import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

const Alert = () => {
    return (
        <div id="alert" className="block spacer m-top-xl">
            <h2>
                <span className="line">Alert</span>
            </h2>

            <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

            <div className="bd-example">
                <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                    A simple success alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                    A simple info alert—check it out!
                </div>
                <div className="alert alert-light" role="alert">
                    A simple light alert—check it out!
                </div>
                <div className="alert alert-dark" role="alert">
                    A simple dark alert—check it out!
                </div>
            </div>

            <PrismCode
                code={ '' +
                '<div className="alert alert-primary" role="alert">\n' +
                '    A simple primary alert—check it out!\n' +
                '</div>\n' +
                '<div className="alert alert-secondary" role="alert">\n' +
                '    A simple secondary alert—check it out!\n' +
                '</div>\n' +
                '<div className="alert alert-success" role="alert">\n' +
                '    A simple success alert—check it out!\n' +
                '</div>\n' +
                '<div className="alert alert-danger" role="alert">\n' +
                '    A simple danger alert—check it out!\n' +
                '</div>\n' +
                '<div className="alert alert-warning" role="alert">\n' +
                '    A simple warning alert—check it out!\n' +
                '</div>\n' +
                '<div className="alert alert-info" role="alert">\n' +
                '    A simple info alert—check it out!\n' +
                '</div>\n' +
                '<div className="alert alert-light" role="alert">\n' +
                '    A simple light alert—check it out!\n' +
                '</div>\n' +
                '<div className="alert alert-dark" role="alert">\n' +
                '    A simple dark alert—check it out!\n' +
                '</div>' +
                '' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Alert;
