import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import HeaderWork from '../blocks/header-work/HeaderWork';
import Footer from '../blocks/footer/Footer';

const WorksChelcieFans = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-portfolio' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Chelcie Fans</title>

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
                                    {/* <p className="date">
                                        <span className="large">25</span> May, 2020
                                    </p> */}

                                    <h1 className="small">Chelcie Fans</h1>

                                    <div className="description">

                                        <p>This <strong>MERN app</strong> is a fan page website where users can create an account, post their thoughts for others to see, interact with other users through these posts, be friends with each other and comment on posts. This application also uses front-end routing, api requests (queries and mutations) and user authentication.
</p>

                                        <h5>Tools</h5>

                                        <ul>
                                            <li>HTML5, CSS3, Javascript</li>
                                            <li>MERN stack (MongoDB, Mongoose, Expressjs, REACT, Nodejs)</li>
                                            <li>GraphQl, Apollo, JsonWebToken</li>
                                            <li>Heroku, and more</li>
                                        </ul>

                                        <h5>Links</h5>

                                        <ul>

                                    <div className="list-group list-group-horizontal-sm">
                                        <div className="list-group-item transform-scale-h">
                                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                            </svg>  <a href="https://secret-hollows-41476.herokuapp.com/" target="_blank">See Deployed App</a></h4>

                                            {/* <p>Los Angeles, CA, USA</p> */}
                                        </div>

                                        <div className="list-group-item transform-scale-h">
                                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>  <a href="https://github.com/simmonsW/chelcie-fans" target="_blank">See GitHub</a></h4>

                                            {/* <p><a title="719-338-4628" href="tel:719-338-4628">213-458-1815</a></p> */}
                                        </div>
                                    </div>


                                        </ul>

                                    </div>

                                    <br /><br /> <p>

📖 
📌
🛠️ 
🤝

🔗 Links:
GitHub repository: https://github.com/simmonsW/chelcie-fans
Deployed App: https://secret-hollows-41476.herokuapp.com/ </p>


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

export default WorksChelcieFans;
