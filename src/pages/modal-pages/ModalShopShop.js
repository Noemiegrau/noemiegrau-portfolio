import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import ShopShop from "../../components/modalWorks/shopshop.js";

class ModalShopShop extends React.Component {

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
                    <ShopShop />
                </Modal>
            </div>
        );
    }
}

export default ModalShopShop;