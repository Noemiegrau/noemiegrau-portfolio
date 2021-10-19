import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const Abbreviations = () => {
    return (
        <div id="abbreviations">
            <h4>Abbreviations</h4>

            <div className="bd-example">
                <p>
                    <abbr title="attribute">attr</abbr>
                </p>
                <p>
                    <abbr title="HyperText Markup Language" className="initialism">HTML</abbr>
                </p>
            </div>

            <PrismCode
                code={'<p>' +
                '<abbr title="attribute">attr</abbr>' +
                '</p>\n' +
                    '<p>' +
                    '<abbr title="HyperText Markup Language" className="initialism">HTML</abbr>' +
                    '</p>'}
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default Abbreviations;
