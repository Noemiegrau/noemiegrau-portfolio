import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import PasswordGenerator from "../../components/modalWorks/passwordgenerator.js";

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
                <button onClick={this.onButtonClick}>Learn more</button>
                <Modal open={hasOpen} onClose={this.onCloseModal}center>
                    <p>This is the modal paragraph.</p>
                    <PasswordGenerator />
                </Modal>
            </div>
        );
    }
}

export default ModalPasswordGenerator;