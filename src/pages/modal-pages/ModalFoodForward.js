import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import FoodForward from "../../components/modalWorks/foodforward.js";

class ModalFoodForward extends React.Component {

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
                    <FoodForward />
                </Modal>
            </div>
        );
    }
}

export default ModalFoodForward;