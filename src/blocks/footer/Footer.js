import React from 'react';
import Copyright from '../footer/Copyright';
import FooterMenu from '../footer/FooterMenu';

const Footer = () => {
    return (
        <footer id="footer" className="site-footer">
            <div className="wrapper no-space">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 align-self-center">
                        <Copyright />
                    </div>

                    <div className="col-xl-8 col-lg-8 align-self-center">
                        <div className="menu float-xl-right float-lg-right">
                            <FooterMenu />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
