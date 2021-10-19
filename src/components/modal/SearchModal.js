import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class SearchModal extends Component {
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
            <div className="search-toggle align-self-center">
                <button onClick={ this.doSomethingBeforeOpen.bind( this ) } type="button" className="btn btn-link border-0 p-0 transform-scale-h" data-toggle="modal" data-target="#search-modal">Search</button>

                <Modal className="modal fade modal-adv-1"
                       id="search-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="search-modal"
                       aria-hidden="true"
                       dialogClassName="modal-full wrapper"
                       ref={ node => this.chart = node }>
                    <Modal.Header>
                        <button onClick={ this.close } type="button" className="close btn btn-link border-0 transform-scale-h" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <span className="align-middle">Close</span>
                                <i className="icon-c icon-close"/>
                            </span>
                        </button>
                    </Modal.Header>

                    <Modal.Body className="d-flex flex-column justify-content-center w-75 m-auto vh-100">
                        <form className="search-form" role="search" method="get" action="/search-results">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type something to search" name="s" title="Type something to search"/>

                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-link transform-scale-h border-0 p-0">
                                        <span>Search</span>
                                        <i className="icon-c icon-arrow-right"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default SearchModal;
