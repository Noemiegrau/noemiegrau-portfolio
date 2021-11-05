import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import Chelcie from "../../components/modalWorks/chelcie.js";

import './modal.css';

class ModalChelcie extends React.Component {

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
                <Modal open={hasOpen} onClose={this.onCloseModal} center>
                    <br /><br /><br /><br /><br /><br />

                    <div onClick={this.onCloseModal} className="justify-content-end ml-auto">
                        <span><button class="goBackButtonModals"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>  Go Back</button></span>
                    </div>

                    <Chelcie />
                </Modal>
            </div>
        );
    }
}

export default ModalChelcie;














// import React, { Component } from 'react';
// import Modal from 'react-awesome-modal';
// import Chelcie from "../components/ModalWorks/chelcie.js";

// export default class Examples extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible : false
//         }
//     }

//     openModal() {
//         this.setState({
//             visible : true
//         });
//     }

//     closeModal() {
//         this.setState({
//             visible : false
//         });
//     }

//     render() {
//         return (
//             <section>
//                         <h4>Modal Chelcie</h4>
//                             <input type="button" value="Open" onClick={() => this.openModal()} />
//                                 <Modal 
//                                     visible={this.state.visible}
//                                     width="1000"
//                                     height="1000"
//                                     effect="fadeInUp"
//                                     onClickAway={() => this.closeModal()}
//                                 >
//                                     <div>
//                                         <h4>Title</h4>
//                                         <p>Some Contents</p>
//                                         <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
//                                     </div>
//                                     <Chelcie />
//                                 </Modal>
//                     </section>
//         );
//     }
// }