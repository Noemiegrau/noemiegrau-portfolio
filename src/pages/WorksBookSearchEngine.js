import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import HeaderWork from '../blocks/header-work/HeaderWork';
import Footer from '../blocks/footer/Footer';

const WorksBookSearchEngine = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-portfolio' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Book Search Engine</title>

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

            <HeaderWork />

            <main id="main" className="site-main bg-half-ring-right bg-half-ring-top">
                <section id="page-content">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg single-content">
                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/works-inside/booksearch.png" alt="Book Search Engine Project" />
                                        </div>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/works-inside/booksearch2.png" alt="Book Search Engine Project" />
                                        </div>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src="assets/img/placeholder/works-inside/booksearch3.png" alt="Book Search Engine Project" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                    {/* <p className="date">
                                        <span className="large">25</span> May, 2020
                                    </p> */}

                                    <h1 className="small">Book Search Engine</h1>

                                    <div className="description">

                                        <p>This single page <strong>MERN app</strong> is a book search engine application where users can create an account, <strong>search for books</strong>, save their favorite books. This application also uses front-end routing, api requests (queries and mutations) and <strong>user authentication</strong>.
</p>

                                        <h5>Tools</h5>

                                        <ul>
                                            <li>HTML5, CSS3, Javascript</li>
                                            <li><strong>MERN stack</strong> (MongoDB, Mongoose, Expressjs, REACT, Nodejs)</li>
                                            <li>GraphQl, Apollo, JsonWebToken, Path</li>
                                            <li>Heroku, and more</li>
                                        </ul>

                                        <h5>Sample account</h5>

                                        <p>Create an account to try the application or use this sample account to log in:</p>

                                        <p><strong>Username:</strong> Mary <br />
                                        <strong>Email:</strong> maryjones@test.com <br />
                                        <strong>Password:</strong> mypassword123</p>

                                        <h5>Links</h5>

                                        <ul>

                                    
                                        <div className="transform-scale-h">
                                        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/fauzidea" title="FauzIDEA">FauzIDEA</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                                            <h4>  <img src="assets/img/placeholder/atom.png" alt="" height="28" width="28" /> <a href="https://fierce-headland-12808.herokuapp.com/" target="_blank">See Deployed App</a></h4>
                                        </div> <br />

                                        <div className="transform-scale-h">
                                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>  <a href="https://github.com/Noemiegrau/book-search-engine" target="_blank">See GitHub</a></h4>
                                        </div>

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

export default WorksBookSearchEngine;
