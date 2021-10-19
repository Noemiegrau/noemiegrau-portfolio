import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const Headings = () => {
    return (
        <div id="headings">
            <h4>Headings</h4>

            <div className="bd-example">
                <h1 className="h">H1</h1>
                <h1 className="small">H1 small</h1>
                <h2>H2</h2>
                <h3>H3</h3>
                <h4>H4</h4>
                <h5>H5</h5>
                <h6>H6</h6>
            </div>
            <PrismCode
                code={'<h1 className="h">H1</h1>\n' +
                '<h1 className="small">H1 small</h1>\n' +
                '<h2>H2</h2>\n' +
                '<h3>H3</h3>\n' +
                '<h4>H4</h4>\n' +
                '<h5>H5</h5>\n' +
                '<h6>H6</h6>'}
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default Headings;
