import React from 'react';
import { Link } from 'react-scroll/modules';

const Sidebar = () => {
    return (
        <aside id="aside" className="widget-area">
            <div className="widget">
                <h5 className="widget-title">
                    <a title="Content" className="scroll-to-id" href="#content">Content</a>
                </h5>

                <ul>
                    <li>
                        <Link
                            title="Typography"
                            className="scroll-to-id"
                            to="typography"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#typography"
                        >
                            Typography
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Icon"
                            className="scroll-to-id"
                            to="icon"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#icon"
                        >
                            Icon
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Image"
                            className="scroll-to-id"
                            to="image"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#image"
                        >
                            Image
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget">
                <h5 className="widget-title">
                    <Link
                        title="Components"
                        className="scroll-to-id"
                        to="components"
                        spy={ true }
                        smooth={ true }
                        duration={ 900 }
                        href="#components"
                    >
                        Components
                    </Link>
                </h5>

                <ul>
                    <li>
                        <Link
                            title="Alert"
                            className="scroll-to-id"
                            to="alert"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#alert"
                        >
                            Alert
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Button"
                            className="scroll-to-id"
                            to="button"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#button"
                        >
                            Button
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Link"
                            className="scroll-to-id"
                            to="link"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#link"
                        >
                            Link
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Card"
                            className="scroll-to-id"
                            to="card"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#card"
                        >
                            Card
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Form"
                            className="scroll-to-id"
                            to="form"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#form"
                        >
                            Form
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="List group"
                            className="scroll-to-id"
                            to="list-group"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#list-group"
                        >
                            List group
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Modal"
                            className="scroll-to-id"
                            to="modal"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#modal"
                        >
                            Modal
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Nav"
                            className="scroll-to-id"
                            to="nav"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#nav"
                        >
                            Nav
                        </Link>
                    </li>
                    <li>
                        <Link
                            title="Scroll"
                            className="scroll-to-id"
                            to="scroll"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#scroll"
                        >
                            Scroll
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget">
                <h5 className="widget-title">
                    <Link
                        title="Utilities"
                        className="scroll-to-id"
                        to="utilities"
                        spy={ true }
                        smooth={ true }
                        duration={ 900 }
                        href="#utilities"
                    >
                        Utilities
                    </Link>
                </h5>

                <ul>
                    <li>
                        <Link
                            title="Background"
                            className="scroll-to-id"
                            to="background"
                            spy={ true }
                            smooth={ true }
                            duration={ 900 }
                            href="#background"
                        >
                            Background
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
