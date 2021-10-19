import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

const UINav = () => {
    return (
        <div id="nav" className="block spacer m-top-xl">
            <h2>
                <span className="line">Nav</span>
            </h2>

            <p>User interface includes navigation components. It is responsive and powerful navigation header which supports, branding, navigation, and more.</p>

            <div id="nav-primary">
                <h4>Primary</h4>

                <div className="bd-example">
                    <nav className="menu-primary">
                        <ul className="clearfix list-unstyled">
                            <li className="menu-item text-left">
                                <a title="Demo 1" href="#nav-primary">Demo 1</a>
                            </li>
                            <li className="menu-item text-left current-menu-item">
                                <a title="Demo 2" href="#nav-primary">Demo 2</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <PrismCode
                    code={ '' +
                    '<nav className="menu-primary">\n' +
                    '    <ul className="clearfix list-unstyled">\n' +
                    '        <li className="menu-item text-left"><a title="Demo 1" href="#">Demo 1</a></li>\n' +
                    '        <li className="menu-item text-left current-menu-item"><a title="Demo 2" href="#">Demo 2</a></li>\n' +
                    '    </ul>\n' +
                    '</nav>' +
                    '' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="nav-secondary">
                <h4>Secondary</h4>

                <div className="bd-example">
                    <nav className="menu-secondary">
                        <ul className="clearfix list-unstyled">
                            <li>
                                <a title="Demo 1" className="btn btn-link transform-scale-h border-0 p-0" href="#nav-secondary">Demo 1</a>
                            </li>
                            <li>
                                <a title="Demo 2" className="btn btn-link transform-scale-h border-0 p-0" href="#nav-secondary">Demo 2</a>
                            </li>
                            <li>
                                <a title="Demo 3" className="btn btn-link transform-scale-h border-0 p-0" href="#nav-secondary">Demo 3</a>
                            </li>
                            <li>
                                <a title="Demo 4" className="btn btn-link transform-scale-h border-0 p-0" href="#nav-secondary">Demo 4</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <PrismCode
                    code={ '' +
                    '<nav className="menu-secondary">\n' +
                    '    <ul className="clearfix list-unstyled">\n' +
                    '        <li><a title="Demo 1" className="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 1</a></li>\n' +
                    '        <li><a title="Demo 2" className="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 2</a></li>\n' +
                    '        <li><a title="Demo 3" className="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 3</a></li>\n' +
                    '        <li><a title="Demo 4" className="btn btn-link transform-scale-h border-0 p-0" href="#">Demo 4</a></li>\n' +
                    '    </ul>\n' +
                    '</nav>' +
                    '' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default UINav;
