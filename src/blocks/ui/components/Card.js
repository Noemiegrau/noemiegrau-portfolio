import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

const Card = () => {
    return (
        <div id="card" className="block spacer m-top-xl">
            <h2>
                <span className="line">Card</span>
            </h2>

            <p>Cards provide a flexible and extensible content container. It supports a wide variety of content, including images, text, links, and more.</p>

            <div className="bd-example">
                <div className="row gutter-width-60 with-pb-60">
                    <div className="col-6">
                        <div className="card card-post">
                            <div className="card-top position-relative">
                                <a title="Card" href="#card">
                                    <div className="img object-fit overflow-hidden">
                                        <div className="object-fit-cover transform-scale-h">
                                            <img className="card-top-img" src="assets/img/placeholder/600x600.jpg" alt="Card" />
                                        </div>
                                    </div>
                                </a>

                                <div className="card-category d-none d-sm-block">
                                    <a title="Category" className="btn btn-sm btn-light transform-scale-h border-0" href="#card">Category</a>
                                </div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">
                                    <a title="Card body" href="#card">Card body</a>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card card-post">
                            <div className="card-top position-relative">
                                <a title="Card" href="#card">
                                    <div className="img object-fit overflow-hidden">
                                        <div className="object-fit-cover transform-scale-h">
                                            <img className="card-top-img" src="assets/img/placeholder/600x600.jpg" alt="Card" />
                                        </div>
                                    </div>
                                </a>

                                <div className="card-category d-none d-sm-block">
                                    <a title="Category" className="btn btn-sm btn-light transform-scale-h border-0" href="#card">Category</a>
                                </div>
                            </div>

                            <div className="card-body border">
                                <h5 className="card-title">
                                    <a title="Card body" href="#card">Card body</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '' +
                '<div className="row gutter-width-60 with-pb-60">\n' +
                '    <div className="col-6">\n' +
                '        <div className="card card-post">\n' +
                '            <div className="card-top position-relative">\n' +
                '                <a title="Card" href="">\n' +
                '                    <div className="img object-fit overflow-hidden">\n' +
                '                        <div className="object-fit-cover transform-scale-h">\n' +
                '                            <img className="card-top-img" src="..." alt="Card">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </a>\n' +
                '\n' +
                '                <div className="card-category d-none d-sm-block">\n' +
                '                    <a title="Category" className="btn btn-sm btn-light transform-scale-h border-0" href="">Category</a>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '\n' +
                '            <div className="card-body">\n' +
                '                <h5 className="card-title">\n' +
                '                    <a title="Card body" href="">Card body</a>\n' +
                '                </h5>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '\n' +
                '    <div className="col-6">\n' +
                '        <div className="card card-post">\n' +
                '            <div className="card-top position-relative">\n' +
                '                <a title="Card" href="">\n' +
                '                    <div className="img object-fit overflow-hidden">\n' +
                '                        <div className="object-fit-cover transform-scale-h">\n' +
                '                            <img className="card-top-img" src="..." alt="Card">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </a>\n' +
                '\n' +
                '                <div className="card-category d-none d-sm-block">\n' +
                '                    <a title="Category" className="btn btn-sm btn-light transform-scale-h border-0" href="">Category</a>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '\n' +
                '            <div className="card-body border">\n' +
                '                <h5 className="card-title">\n' +
                '                    <a title="Card body" href="">Card body</a>\n' +
                '                </h5>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>' +
                '' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Card;
