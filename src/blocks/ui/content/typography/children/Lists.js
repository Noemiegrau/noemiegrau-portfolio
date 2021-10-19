import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const Lists = () => {
    return (
        <div id="lists">
            <h4>Lists</h4>
            <p>Display a list of items inside your content, rendered with a number, a bullet, or none.</p>

            <div id="unordered-list">
                <h6>Unordered list</h6>

                <div className="bd-example">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ul>
                </div>

                <PrismCode
                    code={'<ul>\n' +
                    '   <li>Lorem ipsum</li>\n' +
                    '   <li>Phasellus iaculis</li>\n' +
                    '   <li>Nulla volutpat</li>\n' +
                    '</ul>'}
                    language="html"
                    plugins={["line-numbers"]}
                />
            </div>
            {/*#unordered-lists*/}

            <div id="ordered-lists">
                <h6>Ordered list</h6>

                <div className="bd-example">
                    <ol>
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ol>
                </div>

                <PrismCode
                    code={'<ol>\n' +
                    '   <li>Lorem ipsum</li>\n' +
                    '   <li>Phasellus iaculis</li>\n' +
                    '   <li>Nulla volutpat</li>\n' +
                    '</ol>'}
                    language="html"
                    plugins={["line-numbers"]}
                />
            </div>
            {/*#ordered-lists*/}

            <div id="unstyled-lists">
                <h6>Unstyled list</h6>

                <div className="bd-example">
                    <ul className="list-unstyled">
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ul>
                </div>

                <PrismCode
                    code={'<ul className="list-unstyled">\n' +
                    '   <li>Lorem ipsum</li>\n' +
                    '   <li>Phasellus iaculis</li>\n' +
                    '   <li>Nulla volutpat</li>\n' +
                    '</ul>'}
                    language="html"
                    plugins={["line-numbers"]}
                />
            </div>
            {/*#unstyled-lists*/}
        </div>
    );
};

export default Lists;
