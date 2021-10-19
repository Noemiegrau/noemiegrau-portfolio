import React from 'react';
import dataBlogCard from '../../data/blog/blog';

const Blog = () => {
    return (
        <section id="blog" className="block spacer p-top-xl">
            <div className="wrapper">
                <h2 className="text-right">
                    <a title="Blogging" className="transform-scale-h" href={ process.env.PUBLIC_URL + "/journal" }>
                        <span className="line">Blogging</span>
                    </a>
                </h2>
            </div>

            <div className="bg-gray-light ptb-blog">
                <div className="wrapper">
                    <div className="row gutter-width-lg">
                        { dataBlogCard && dataBlogCard.map( ( item, key ) => {
                            return (
                                <div key={ key } className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="card card-post">
                                        <div className="card-top position-relative">
                                            <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>
                                                <div className="img object-fit overflow-hidden">
                                                    <div className="object-fit-cover transform-scale-h">
                                                        <img className="card-top-img" src={ item.imgLink } alt={ item.imgAlt } />
                                                    </div>
                                                </div>
                                            </a>

                                            <div className="card-category">
                                                <a title={ item.categoryTitle } className="btn btn-sm btn-light transform-scale-h border-0" href={ process.env.PUBLIC_URL + item.categoryLink }>{ item.categoryTitle }</a>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        } ) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
