import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

const Button = () => {
    return (
        <div id="button" className="block spacer m-top-xl">
            <h2>
                <span className="line">Button</span>
            </h2>

            <p>Oxer includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. </p>

            <div className="bd-example">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
                <button type="button" className="btn btn-link">Link</button>
            </div>

            <PrismCode
                code={ '' +
                '<button type="button" className="btn btn-primary">Primary</button>\n' +
                '<button type="button" className="btn btn-secondary">Secondary</button>\n' +
                '<button type="button" className="btn btn-success">Success</button>\n' +
                '<button type="button" className="btn btn-danger">Danger</button>\n' +
                '<button type="button" className="btn btn-warning">Warning</button>\n' +
                '<button type="button" className="btn btn-info">Info</button>\n' +
                '<button type="button" className="btn btn-light">Light</button>\n' +
                '<button type="button" className="btn btn-dark">Dark</button>\n' +
                '<button type="button" className="btn btn-link">Link</button>' +
                '' }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div id="outline-buttons">
                <h4>Outline buttons</h4>

                <div className="bd-example">
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                    <button type="button" className="btn btn-outline-success">Success</button>
                    <button type="button" className="btn btn-outline-danger">Danger</button>
                    <button type="button" className="btn btn-outline-warning">Warning</button>
                    <button type="button" className="btn btn-outline-info">Info</button>
                    <button type="button" className="btn btn-outline-light">Light</button>
                    <button type="button" className="btn btn-outline-dark">Dark</button>
                </div>

                <PrismCode
                    code={ '' +
                    '<button type="button" className="btn btn-outline-primary">Primary</button>\n' +
                    '<button type="button" className="btn btn-outline-secondary">Secondary</button>\n' +
                    '<button type="button" className="btn btn-outline-success">Success</button>\n' +
                    '<button type="button" className="btn btn-outline-danger">Danger</button>\n' +
                    '<button type="button" className="btn btn-outline-warning">Warning</button>\n' +
                    '<button type="button" className="btn btn-outline-info">Info</button>\n' +
                    '<button type="button" className="btn btn-outline-light">Light</button>\n' +
                    '<button type="button" className="btn btn-outline-dark">Dark</button>' +
                    '' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="button-hover">
                <h4>Button hover</h4>

                <div className="bd-example">
                    <button type="button" className="btn btn-dark transform-scale-h">Dark</button>
                    <button type="button" className="btn btn-outline-dark transform-scale-h">Dark</button>
                    <button type="button" className="btn btn-link transform-scale-h">Dark</button>
                </div>

                <PrismCode
                    code={ '' +
                    '<button type="button" className="btn btn-dark transform-scale-h">Dark</button>\n' +
                    '<button type="button" className="btn btn-outline-dark transform-scale-h">Dark</button>\n' +
                    '<button type="button" className="btn btn-link transform-scale-h">Dark</button>' +
                    '' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="sizes">
                <h4>Sizes</h4>

                <div className="bd-example">
                    <button type="button" className="btn btn-primary btn-sm">Small</button>
                    <button type="button" className="btn btn-primary">Normal</button>
                    <button type="button" className="btn btn-primary btn-lg">Large</button>
                </div>

                <PrismCode
                    code={ '' +
                    '<button type="button" className="btn btn-primary btn-sm">Small</button>\n' +
                    '<button type="button" className="btn btn-primary">Normal</button>\n' +
                    '<button type="button" className="btn btn-primary btn-lg">Large</button>' +
                    '' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default Button;
