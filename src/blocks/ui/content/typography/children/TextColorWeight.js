import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const TextColorWeight = () => {
    return (
        <div id="text-color-weight">
            <h4>Text color weight</h4>

            <div className="bd-example">
                <p className="text-secondary">.text-secondary</p>
                <p className="text-secondary regular">.text-secondary</p>
                <p className="text-secondary bold">.text-secondary</p>
            </div>

            <PrismCode
                code={'<p className="text-secondary">.text-secondary</p>\n' +
                '<p className="text-secondary regular">.text-secondary</p>\n' +
                '<p className="text-secondary bold">.text-secondary</p>'}
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default TextColorWeight;
