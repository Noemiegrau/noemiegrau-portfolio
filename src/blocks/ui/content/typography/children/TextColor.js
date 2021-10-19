import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const TextColor = () => {
    return (
        <div id="text-color">
            <h4>Text color</h4>

            <div className="bd-example">
                <p className="text-primary">.text-primary</p>
                <p className="text-secondary">.text-secondary</p>
                <p className="text-success">.text-success</p>
                <p className="text-danger">.text-danger</p>
                <p className="text-warning">.text-warning</p>
                <p className="text-info">.text-info</p>
                <p className="text-light bg-dark">.text-light</p>
                <p className="text-dark">.text-dark</p>
                <p className="text-body">.text-body</p>
                <p className="text-muted">.text-muted</p>
                <p className="text-white bg-dark">.text-white</p>
                <p className="text-black-50">.text-black-50</p>
                <p className="text-white-50 bg-dark">.text-white-50</p>
            </div>

            <PrismCode
                code={
                    '<p className="text-primary">.text-primary</p>\n' +
                    '<p className="text-secondary">.text-secondary</p>\n' +
                    '<p className="text-success">.text-success</p>\n' +
                    '<p className="text-danger">.text-danger</p>\n' +
                    '<p className="text-warning">.text-warning</p>\n' +
                    '<p className="text-info">.text-info</p>\n' +
                    '<p className="text-light bg-dark">.text-light</p>\n' +
                    '<p className="text-dark">.text-dark</p>\n' +
                    '<p className="text-body">.text-body</p>\n' +
                    '<p className="text-muted">.text-muted</p>\n' +
                    '<p className="text-white bg-dark">.text-white</p>\n' +
                    '<p className="text-black-50">.text-black-50</p>\n' +
                    '<p className="text-white-50 bg-dark">.text-white-50</p>'
                }
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default TextColor;
