import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Chelcie from "../components/ModalWorks/chelcie.js";

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                        <h4>Modal Chelcie</h4>
                            <input type="button" value="Open" onClick={() => this.openModal()} />
                                <Modal 
                                    visible={this.state.visible}
                                    width="1000"
                                    height="1000"
                                    effect="fadeInUp"
                                    onClickAway={() => this.closeModal()}
                                >
                                    <div>
                                        <h4>Title</h4>
                                        <p>Some Contents</p>
                                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                                    </div>
                                    <Chelcie />
                                </Modal>
                    </section>
        );
    }
}