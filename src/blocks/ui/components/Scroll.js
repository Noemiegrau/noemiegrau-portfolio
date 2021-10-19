import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll/modules';

const Scroll = () => {
    return (
        <div id="scroll" className="block spacer m-top-xl">
            <h2>
                <span className="line">Scroll</span>
            </h2>

            <p>Visitors can access a specific section of the page by clicking a link. You need to add an ID attribute to your target element. Then, use that ID in value of href attribute of your <code className="highlighter-rouge">&lt;a&gt;</code> tag and add a "scroll-to-id" class.</p>

            <div className="bd-example">
                <Link
                    className="btn btn-dark scroll-to-id"
                    to="content"
                    spy={ true }
                    smooth={ true }
                    duration={ 900 }
                    href="#content"
                >
                    Scroll to content
                </Link>
            </div>

            <PrismCode
                code={ '' +
                '<a className="btn btn-dark scroll-to-id" href="#content">Scroll to content</a>\n' +
                '' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Scroll;
