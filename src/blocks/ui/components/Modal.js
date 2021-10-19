import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

class MenuModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open  = this.open.bind( this );
        this.close = this.close.bind( this );
    }

    open() {
        this.setState( { showModal: true }, function() {
        } );
    }

    close() {
        this.setState( { showModal: false } );
    }

    doSomethingBeforeOpen() {
        this.open();
    }

    render() {

        return (
            <div id="modal" className="block spacer m-top-xl">
                <h2>
                    <span className="line">Modal</span>
                </h2>

                <p>Use Bootstrapís JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. You also need to add the 'modal-adv-1' CLASS to your parent modal DIV element.</p>

                <div className="bd-example">
                    <button onClick={ this.doSomethingBeforeOpen.bind( this ) }
                            type="button"
                            className="btn btn-dark" data-toggle="modal" data-target="#demo-modal">Demo modal
                    </button>

                    <Modal className="modal fade modal-adv-1"
                           show={ this.state.showModal }
                           onHide={ this.close }
                           backdrop={ false }
                           id="demo-modal"
                           aria-labelledby="demo-modal"
                           aria-hidden="true"
                           dialogClassName="modal-full wrapper h-100"
                           ref={ node => this.chart = node }>

                        <Modal.Header>
                            <button onClick={ this.close } type="button" className="close btn btn-link border-0 transform-scale-h" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">
                                                <span className="align-middle">Close</span>
                                                <i className="icon-c icon-close"></i>
                                            </span>
                            </button>
                        </Modal.Header>
                        <Modal.Body className="d-flex justify-content-between">
                            <div className="align-self-center">
                                <p>Modal body text goes here.</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>

                <PrismCode
                    code={ '' +
                    '<button type="button" className="btn btn-dark" data-toggle="modal" data-target="#demo-modal">Demo modal</button>\n' +
                    '\n' +
                    '<div className="modal fade modal-adv-1" id="demo-modal" tabindex="-1" role="dialog" aria-labelledby="demo-modal" aria-hidden="true">\n' +
                    '    <div className="modal-dialog modal-full" role="document">\n' +
                    '        <div className="wrapper">\n' +
                    '            <div className="modal-content">\n' +
                    '                <div className="modal-header">\n' +
                    '                    <button type="button" className="close btn btn-link border-0 transform-scale-h" data-dismiss="modal" aria-label="Close">\n' +
                    '                        <span aria-hidden="true">\n' +
                    '                            <span className="align-middle">Close</span>\n' +
                    '                            <i className="icon-c icon-close"></i>\n' +
                    '                        </span>\n' +
                    '                    </button>\n' +
                    '                </div>\n' +
                    '\n' +
                    '                <div className="modal-body d-flex justify-content-between">\n' +
                    '                    <div className="align-self-center">\n' +
                    '                        <p>Modal body text goes here.</p>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
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
    }
}

export default MenuModal;
