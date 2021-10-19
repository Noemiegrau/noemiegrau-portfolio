import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const CustomizingHeadings = () => {
    return (
        <div id="customizing-headings">
            <h4>Customizing headings</h4>

            <div className="bd-example">
                <h1 className="small">Fancy display <span className="line">heading</span>
                </h1>
                <h1 className="small">Fancy display heading<span className="dot">.</span>
                </h1>
            </div>

            <PrismCode
                code={'<h1 className="small">Fancy display <span className="line">heading</span></h1>\n' +
                '<h1 className="small">Fancy display heading<span className="dot">.</span></h1>\n'}
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default CustomizingHeadings;
