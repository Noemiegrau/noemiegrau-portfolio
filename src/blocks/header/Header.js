import React from 'react';
import Logo from '../../blocks/logo/Logo';
import Nav from '../../nav/Nav';
import '../../nav/Nav.css';

const Header = () => {
    return (
        <header id="header" className="site-header justify-content-end">
            <div id="wrapperHeader" className="wrapper d-flex">
                <div className="align-self-center">
                    {/* <Logo image={ "/assets/img/logo/logo.svg" } /> */}
                    <a href="/"><img
                    src="/assets/img/logo/logo.svg"
                    alt="Logo"
                    className="logo primary-logo transform-scale-h" /></a>
                </div>

                <div className="justify-content-end ml-auto">
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;
