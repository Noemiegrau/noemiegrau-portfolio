import React from 'react';
import Headings from '../../content/typography/children/Headings';
import CustomizingHeadings from '../../content/typography/children/CustomizingHeadings';
import InlineTextElements from '../../content/typography/children/InlineTextElements';
import Abbreviations from '../../content/typography/children/Abbreviations';
import Blockquotes from '../../content/typography/children/Blockquotes';
import Lists from '../../content/typography/children/Lists';
import TextAlignment from '../../content/typography/children/TextAlignment';
import TextTransform from '../../content/typography/children/TextTransform';
import TextColor from '../../content/typography/children/TextColor';
import TextColorWeight from '../../content/typography/children/TextColorWeight';

const Typography = () => {
    return (
        <div id="typography" className="block spacer m-top-xl">
            <h2>
                <span className="line">Typography</span>
            </h2>

            <p>There are examples of typography, including global settings, headings, body text, lists and more.</p>

            <Headings />

            <CustomizingHeadings />

            <InlineTextElements />

            <Abbreviations />

            <Blockquotes />

            <Lists />

            <TextAlignment />

            <TextTransform />

            <TextColor />

            <TextColorWeight />
        </div>
    );
};

export default Typography;
