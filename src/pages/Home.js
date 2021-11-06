import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import Works from '../blocks/works/Works';
// import Reviews from '../blocks/reviews/Reviews';
import Resume from '../blocks/resume/Resume';
import Contacts from '../blocks/contacts/Contacts';

import About from './About';
import ContactsPage from './Contacts';

import CustomCursor from '../components/CustomCursor';

const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Noemie Grau - Official Portfolio Website</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header />
            {/* <CustomCursor /> */}

            <main id="main" className="site-main">
                <PageTitleHome />

                <About />

                <Resume />

                <Works />

                {/* <Reviews /> */}

                <Contacts />

                <ContactsPage />
            </main>

            <Footer />

            {/* <div class="cursors">
                <div></div>
            </div> */}

        </Fragment>
    );
};

export default Home;
