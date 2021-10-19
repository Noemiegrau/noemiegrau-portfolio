import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleJournalSingle from '../blocks/page-title/PageTitleJournalSingle';
import JournalDescription from '../blocks/journal/JournalDescription';
import JournalMeta from '../blocks/journal/JournalMeta';
import JournalDate from '../blocks/journal/JournalDate';
import JournalComments from '../blocks/journal/JournalComments';
import JournalTags from '../blocks/journal/JournalTags';
import Widget from '../blocks/widget/Widget';

const JournalSinglePost = () => {
    document.body.classList.add( 'single-post' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Journal Single Post | Oxer - Minimal Portfolio React Template</title>

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

            <main id="main" className="site-main">
                <PageTitleJournalSingle />

                <section id="page-content" className="spacer m-top-xl">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-static single-content">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/1113x510.jpg" alt="What to do when holidays go wrong" />
                                        </div>
                                    </div>

                                    <div className="bg-half-ring-left"></div>

                                    <JournalDate />

                                    <JournalMeta />

                                    <JournalDescription />

                                    <JournalTags />

                                    <JournalComments />
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <Widget />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
};

export default JournalSinglePost;
