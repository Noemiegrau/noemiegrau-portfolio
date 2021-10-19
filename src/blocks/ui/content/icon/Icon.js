import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';


const Icon = () => {
    return (
        <div id="icon" className="block spacer m-top-xl">
            <h2>
                <span className="line">Icon</span>
            </h2>

            <p>User Interface includes custom styled icons generated with Fontello icons font generator.</p>

            <div className="bd-example">
                <p>
                    <i className="icon-c icon-menu"></i>
                </p>
                <p>
                    <i className="icon-c icon-close"></i>
                </p>
                <p>
                    <i className="icon-c icon-search"></i>
                </p>
                <p>
                    <i className="icon-c icon-arrow-up"></i>
                </p>
                <p>
                    <i className="icon-c icon-arrow-down"></i>
                </p>
                <p>
                    <i className="icon-c icon-arrow-left"></i>
                </p>
                <p>
                    <i className="icon-c icon-arrow-right"></i>
                </p>
            </div>

            <PrismCode
                code={ '<p>' +
                '<i className="icon-c icon-menu"></i>' +
                '</p>\n' +
                '<p>' +
                '<i className="icon-c icon-close"></i>' +
                '</p>\n' +
                '<p>' +
                '<i className="icon-c icon-search"></i>' +
                '</p>\n' +
                '<p>' +
                '<i className="icon-c icon-arrow-up"></i>' +
                '</p>\n' +
                '<p>' +
                '<i className="icon-c icon-arrow-down"></i>' +
                '</p>\n' +
                '<p>' +
                '<i className="icon-c icon-arrow-left"></i>' +
                '</p>\n' +
                '<p>' +
                '<i className="icon-c icon-arrow-right"></i>' +
                '</p>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Icon;
