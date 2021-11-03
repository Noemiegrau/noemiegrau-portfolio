import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

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
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}
    






























// import React from "react";
// import PropTypes from "prop-types";
// import "./modal.css";

// export default class Modal extends React.Component {

//     onClose = e => {
//         this.props.onClose && this.props.onClose(e);
//       };

//     render() {
//         if(!this.props.show){
//             return null;
//         }
        
//         return (
//             <div id="modal">
//               <div class="content mod">{this.props.children}</div>
//               <div class="actions">
//                 <button
//                   class="toggle-button"
//                   onClick={this.onClose}
//                 >
//                   Close X
//                 </button>
//               </div>
//             </div>
//           );

//     }
//   }


//   Modal.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     show: PropTypes.bool.isRequired
//   };