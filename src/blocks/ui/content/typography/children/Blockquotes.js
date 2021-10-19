import React from "react"
import {PrismCode} from "../../../../../components/prsimjs/Prismjs";


const Blockquotes = () => {
    return (
        <div id="blockquotes">
            <h4>Blockquotes</h4>

            <div className="bd-example">
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </div>

            <PrismCode
                code={'<blockquote>\n' +
                '    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                '</blockquote>'}
                language="html"
                plugins={["line-numbers"]}
            />
        </div>
    );
};

export default Blockquotes;
