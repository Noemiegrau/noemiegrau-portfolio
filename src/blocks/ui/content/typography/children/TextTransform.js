import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const TextTransform = () => {
    return (
        <div id="text-transform">
            <h4>Text transform</h4>

            <div className="bd-example">
                <p className="text-lowercase">Lowercased text.</p>
                <p className="text-uppercase">Uppercased text.</p>
                <p className="text-capitalize">CapiTaliZed text.</p>
            </div>

            <PrismCode
                code={' <p className="text-lowercase">Lowercased text.</p>\n' +
                '<p className="text-uppercase">Uppercased text.</p>\n' +
                '<p className="text-capitalize">CapiTaliZed text.</p>'
                }
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default TextTransform;
