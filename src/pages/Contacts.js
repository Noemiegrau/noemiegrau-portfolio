import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

// import Loading from '../blocks/loading/Loading';
// import Header from '../blocks/header/Header';
// import Footer from '../blocks/footer/Footer';

import PageTitleContacts from '../blocks/page-title/PageTitleContacts';
import ContactForm from '../components/form/ContactForm';

const Contacts = () => {
    document.body.classList.add( 'page' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Contacts</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            {/* <Loading /> */}

            {/* <Header/> */}

            <main id="main" className="site-main">
                <PageTitleContacts />

                <section id="page-content" className="block spacer p-top-xl">
                    <div className="wrapper">
                        <div id="contacts" className="block">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                    {/* <h2>Here you <br/>can <span className="line">contact me</span></h2> */}

                                    {/* <p className="mt-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p> */}
                                
                                    {/* <section id="contact" className="block spacer p-top-xl"> */}
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                                    <div className="list-group list-group-horizontal-sm">
                                        <div className="list-group-item">
                                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                            </svg>  City, State</h4>

                                            <p>Los Angeles, CA, USA.</p>
                                        </div>

                                        {/* <div className="list-group-item">
                                            <h4>Clipping</h4>

                                            <p>CO</p>
                                        </div> */}

                                        {/* <div className="list-group-item">
                                            <h4>State</h4>

                                            <p>Colorado</p>
                                        </div> */}

                                        <div className="list-group-item">
                                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>  Phone</h4>

                                            <p><a title="719-338-4628" href="tel:719-338-4628">213-458-1815</a></p>
                                        </div>
                                    </div>

                                    <div className="list-group list-group-horizontal-sm mt-0">
                                        <div className="list-group-item mb-0 pb-0">
                                            <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                            </svg>  Email</h4>

                                            <p><a title="noemiegrau@outlook.fr" href="mailto:noemiegrau@outlook.fr">noemiegrau@outlook.fr</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block spacer p-top-xl">
                            <h3>Or fill up the <span className="line">form</span></h3>

                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </Fragment>
    );
};

export default Contacts;
