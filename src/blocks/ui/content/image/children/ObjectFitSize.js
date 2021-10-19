import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ObjectFitSize = () => {
    return (
        <div id="object-fit-size">
            <h4>Object fit size</h4>

            <div className="bd-example">
                <div className="row pb-3">
                    <div className="col-4">
                        <div className="img object-fit size-5">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit" />
                            </div>
                        </div>
                        {/* Height: 112% */}
                    </div>

                    <div className="col-4">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit" />
                            </div>
                        </div>
                        {/* Height: 100% */}
                    </div>

                    <div className="col-4">
                        <div className="img object-fit size-4">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit" />
                            </div>
                        </div>
                        {/* Height: 95% */}
                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-4">
                        <div className="img object-fit size-3">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit" />
                            </div>
                        </div>
                        {/* Height: 85% */}
                    </div>

                    <div className="col-4">
                        <div className="img object-fit size-2">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit" />
                            </div>
                        </div>
                        {/* Height: 54% */}
                    </div>

                    <div className="col-4">
                        <div className="img object-fit size-1">
                            <div className="object-fit-cover">
                                <img src="assets/img/placeholder/600x600.jpg" alt="Objet fit" />
                            </div>
                        </div>
                        {/* Height: 47% */}
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '' +
                '<div className="row pb-3">\n' +
                '    <div className="col-4">\n' +
                '        <div className="img object-fit size-5">\n' +
                '            <div className="object-fit-cover">\n' +
                '                <img src="..." alt="Objet fit">\n' +
                '            </div>\n' +
                '        </div><!-- Height: 112% -->\n' +
                '    </div>\n' +
                '\n' +
                '    <div className="col-4">\n' +
                '        <div className="img object-fit">\n' +
                '            <div className="object-fit-cover">\n' +
                '                <img src="..." alt="Objet fit">\n' +
                '            </div>\n' +
                '        </div><!-- Height: 100% -->\n' +
                '    </div>\n' +
                '\n' +
                '    <div className="col-4">\n' +
                '        <div className="img object-fit size-4">\n' +
                '            <div className="object-fit-cover">\n' +
                '                <img src="..." alt="Objet fit">\n' +
                '            </div>\n' +
                '        </div><!-- Height: 95% -->\n' +
                '    </div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="row pt-3">\n' +
                '    <div className="col-4">\n' +
                '        <div className="img object-fit size-3">\n' +
                '            <div className="object-fit-cover">\n' +
                '                <img src="..." alt="Objet fit">\n' +
                '            </div>\n' +
                '        </div><!-- Height: 85% -->\n' +
                '    </div>\n' +
                '\n' +
                '    <div className="col-4">\n' +
                '        <div className="img object-fit size-2">\n' +
                '            <div className="object-fit-cover">\n' +
                '                <img src="..." alt="Objet fit">\n' +
                '            </div>\n' +
                '        </div><!-- Height: 54% -->\n' +
                '    </div>\n' +
                '\n' +
                '    <div className="col-4">\n' +
                '        <div className="img object-fit size-1">\n' +
                '            <div className="object-fit-cover">\n' +
                '                <img src="..." alt="Objet fit">\n' +
                '            </div>\n' +
                '        </div><!-- Height: 47% -->\n' +
                '    </div>\n' +
                '</div>' +
                '' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ObjectFitSize;
