import React from 'react';
import Logo from '../../blocks/logo/Logo';
// import Nav from '../../nav/Nav';
import '../../nav/Nav.css';

const HeaderWork = () => {
    return (
        <header id="header" className="site-header justify-content-end">
            <div id="wrapperHeader" className="wrapper d-flex">
                <div className="align-self-center">
                    <Logo image={ "/assets/img/logo/logo.svg" } />
                </div>






                {/* <div className="justify-content-end ml-auto">
                    <span id="goBackButton" ><a href="javascript: history.go(-1)"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>  Go Back</a></span>
                </div> */}





            </div>
        </header>
    );
};

export default HeaderWork;
