import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import PasswordGenerator from "../../components/modalWorks/passwordgenerator.js";

import './modal.css';

class ModalPasswordGenerator extends React.Component {

    state = {
        hasOpen: false
    };

    onButtonClick = () => {
        this.setState({ hasOpen : true });
    };

    onCloseModal = () => {
        this.setState({ hasOpen : false })
    };

    render(){
        const { hasOpen } = this.state;
        return ( 
            <div>
                {/* <button onClick={this.onButtonClick}>Learn more</button> */}
                <span onClick={this.onButtonClick}>Learn more</span>
                <Modal open={hasOpen} onClose={this.onCloseModal}center>
                <br /><br /><br /><br /><br /><br />

                <div onClick={this.onCloseModal} className="justify-content-end ml-auto">
                    <span><button class="goBackButtonModals"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>  Go Back</button></span>
                </div>

                    <PasswordGenerator />
                </Modal>
            </div>
        );
    }
}

export default ModalPasswordGenerator;