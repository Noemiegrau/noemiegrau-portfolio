import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleSearch from '../blocks/page-title/PageTitleSearch';
import SearchItemsData from '../data/search-results/searchItems';

const SearchResults = () => {
    document.body.classList.add( 'search-results' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Search Results| Oxer - Minimal Portfolio React Template</title>

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
                <PageTitleSearch />

                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="row gutter-width-lg with-pb-lg nth-last-child-3-pb-0">
                            { SearchItemsData && SearchItemsData.map( ( item, key ) => {
                                return (
                                    <div key={ key } className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <h4>
                                                    <a title={ item.title } className="d-block" href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                                </h4>

                                                <p className="p-small">
                                                    <a title={ item.categoryTitle } className="text-secondary bold" href={ process.env.PUBLIC_URL + item.categoryLink }>{ item.categoryTitle }</a>
                                                </p>

                                                <p>{ item.description }</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } ) }
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
};

export default SearchResults;
