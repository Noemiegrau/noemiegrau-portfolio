import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import PageTitleAbout from '../blocks/page-title/PageTitleAbout';
import AboutContent from '../blocks/about/AboutContent';
import Awards from '../blocks/about/Awards';

const About = () => {
    document.body.classList.add( 'page' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>About me</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <main id="main" className="site-main">
                <PageTitleAbout />

                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <AboutContent />
                        <Awards />
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </Fragment>
    );
};

export default About;
