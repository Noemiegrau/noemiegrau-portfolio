import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

const WorksInside = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-portfolio' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Works Inside | Oxer - Minimal Portfolio React Template</title>

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

            <main id="main" className="site-main bg-half-ring-right bg-half-ring-top">
                <section id="page-content">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg single-content">
                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/966x560.jpg" alt="Product photography" />
                                        </div>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/966x560.jpg" alt="Product photography" />
                                        </div>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/966x560.jpg" alt="Product photography" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                    <p className="date">
                                        <span className="large">25</span> May, 2020
                                    </p>

                                    <h1 className="small">Product photography</h1>

                                    <div className="description">
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>

                                        <h5>Idea</h5>

                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>

                                        <h5>Product features</h5>

                                        <ul>
                                            <li>At vero eos et accusamus</li>
                                            <li>At vero eos et accusamus</li>
                                            <li>At vero eos et accusamus</li>
                                            <li>At vero eos et accusamus</li>
                                        </ul>
                                    </div>
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

export default WorksInside;
