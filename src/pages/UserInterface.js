import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';

import PageTitleUserInterface from '../blocks/page-title/PageTitleUserInterface';

// Content
import Typography from '../blocks/ui/content/typography/Typography';
import Icon from '../blocks/ui/content/icon/Icon';
import Image from '../blocks/ui/content/image/Image';

// Components
import Alert from '../blocks/ui/components/Alert';
import Button from '../blocks/ui/components/Button';
import UILink from '../blocks/ui/components/Link';
import Card from '../blocks/ui/components/Card';
import Form from '../blocks/ui/components/Form';
import ListGroup from '../blocks/ui/components/ListGroup';
import Modal from '../blocks/ui/components/Modal';
import UINav from '../blocks/ui/components/Nav';
import Scroll from '../blocks/ui/components/Scroll';

// Utilities
import Background from '../blocks/ui/utilities/Background';

// Sticky
import StickyBox from 'react-sticky-box';

// Sidebar
import Sidebar from '../blocks/ui/sidebar/Sidebar';

const UserInterface = () => {
    document.body.classList.add( 'ui' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>UI | Oxer - Minimal Portfolio React Template</title>

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

            <header id="header" className="site-header">
                <div className="wrapper d-flex justify-content-between">
                    <div className="align-self-center">
                        <a title="Logo" className="logo primary-logo transform-scale-h" href="/">
                            <img src="assets/img/logo/logo.svg" alt="Logo" />
                        </a>
                    </div>
                </div>
            </header>

            <main id="main" className="site-main">
                <PageTitleUserInterface />

                <section id="examples" className="block spacer p-top-xl">
                    <div className="wrapper">
                        <div className="row gutter-width-lg">
                            <div className="col-xl-8 col-lg-8 col-md-8 order-xl-0 order-lg-0 order-md-0 order-1">
                                <div id="content" className="block">
                                    <h1 className="small">Content</h1>

                                    <Typography />

                                    <Icon />

                                    <Image />
                                </div>

                                <div id="components" className="block spacer m-top-xl">
                                    <h1 className="small">Components</h1>

                                    <Alert />
                                    <Button />
                                    <UILink />
                                    <Card />
                                    <Form />
                                    <ListGroup />
                                    <Modal />
                                    <UINav />
                                    <Scroll />
                                </div>

                                <div id="utilities" className="block spacer m-top-xl">
                                    <h1 className="small">Utilities</h1>

                                    <Background />
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 order-xl-1 order-lg-1 order-md-1 order-0" id="sticky">
                                <StickyBox>
                                    <Sidebar />
                                </StickyBox>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer" className="site-footer">
                <div className="wrapper no-space">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 align-self-center">
                            <div className="copyright">
                                <p>© 2020 Portfolio Template By <a href="https://www.adveits.com">Adveits</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default UserInterface;
