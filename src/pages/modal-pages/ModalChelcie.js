import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import Chelcie from "../../components/modalWorks/chelcie.js";

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
                <button onClick={this.onButtonClick}>Learn more</button>
                <Modal open={hasOpen} onClose={this.onCloseModal}center>
                    <p>This is the modal paragraph.</p>
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