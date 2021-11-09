import React, {useState} from 'react';
// import React, { Component, } from 'react';
import axios from 'axios';


class ContactForm extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
                name: '',
                email: '',
                subject: '',
                message: ''
            // successMessage: "Sender's message was sent successfully",
            // warningMessage: 'Fill up the form, please!',
            // errorMessage: 'Something go wrong. Try again later!',
            // alertClass: '',
            // responseMessage: '',
            // alertTimeout: '',
            // delay: 5000
        };
    }

    // const [sent, setSent] = useState(false);
    // const [text, setText] = useState("");

    // const handleSend = async() => {}


    render() {
        return (
            <form id="contact-form" onSubmit={this.submitEmail.bind(this)} method="POST" className="wpcf7-form">
                <p className="input-group gutter-width-30">
                    <span className="gutter-width">
                        <input placeholder="Name *"
                               id="name"
                               type="text"
                               className="form-control"
                               required value={this.state.name}
                               onChange={this.onNameChange.bind(this)}
                               size="30"
                               maxLength="245" />
                    </span>

                    <span className="gutter-width">
                        <input placeholder="Email *"
                               id="email"
                               type="email"
                               className="form-control" aria-describedby="emailHelp"
                               required value={this.state.email}
                               onChange={this.onEmailChange.bind(this)}
                               size="30"
                               maxLength="100" />
                    </span>
                </p>

                <p>
                    <textarea placeholder="Subject *"
                              id="subject"
                              type="text"
                              className="form-control"
                              required value={this.state.subject}
                              onChange={this.onSubjectChange.bind(this)}
                              maxLength="65525" 
                              cols="45"
                              rows="8"></textarea>
                </p>
                <p>
                    <textarea placeholder="Message *"
                              id="message"
                              cols="45"
                              rows="8"
                              className="form-control"
                              required value={this.state.message}
                              onChange={this.onMsgChange.bind(this)}
                              maxLength="65525"></textarea>
                </p>

                <p>
                    <input name="submit" type="submit" className="btn btn-dark border-0 transform-scale-h" defaultValue="Send" />
                </p>
            </form>
        );
    }
}

export default ContactForm;




















// class ContactForm extends React.Component {
//     constructor( props ) {
//         super(props);
//         this.state = {
//                 name: '',
//                 email: '',
//                 subject: '',
//                 message: ''
//             // successMessage: "Sender's message was sent successfully",
//             // warningMessage: 'Fill up the form, please!',
//             // errorMessage: 'Something go wrong. Try again later!',
//             // alertClass: '',
//             // responseMessage: '',
//             // alertTimeout: '',
//             // delay: 5000
//         };
//     }

//     onNameChange(event) {
//         this.setState({name: event.target.value})
//     }

//     onEmailChange(event) {
//         this.setState({email: event.target.value})
//     }

//     onSubjectChange(event) {
//         this.setState({subject: event.target.value})
//     }

//     onMsgChange(event) {
//         this.setState({message: event.target.value})
//     }


//     submitEmail(e){
//         e.preventDefault();
//         axios({
//           method: "POST", 
//           url:"/send", 
//           data:  this.state
//         }).then((response)=>{
//           if (response.data.status === 'success'){
//               alert("Thank you for contacting me. I will get back to you very soon!"); 
//               this.resetForm()
//           }else if(response.data.status === 'fail'){
//               alert("Something go wrong. Try again later!")
//           }
//         })
//     }

//     resetForm(){
//             this.setState({name: '', email: '',subject:'', message: ''})
//     }


//     render() {
//         return (
//             <form id="contact-form" onSubmit={this.submitEmail.bind(this)} method="POST" className="wpcf7-form">
//                 <p className="input-group gutter-width-30">
//                     <span className="gutter-width">
//                         <input placeholder="Name *"
//                                id="name"
//                                type="text"
//                                className="form-control"
//                                required value={this.state.name}
//                                onChange={this.onNameChange.bind(this)}
//                                size="30"
//                                maxLength="245" />
//                     </span>

//                     <span className="gutter-width">
//                         <input placeholder="Email *"
//                                id="email"
//                                type="email"
//                                className="form-control" aria-describedby="emailHelp"
//                                required value={this.state.email}
//                                onChange={this.onEmailChange.bind(this)}
//                                size="30"
//                                maxLength="100" />
//                     </span>
//                 </p>

//                 <p>
//                     <textarea placeholder="Subject *"
//                               id="subject"
//                               type="text"
//                               className="form-control"
//                               required value={this.state.subject}
//                               onChange={this.onSubjectChange.bind(this)}
//                               maxLength="65525" 
//                               cols="45"
//                               rows="8"></textarea>
//                 </p>
//                 <p>
//                     <textarea placeholder="Message *"
//                               id="message"
//                               cols="45"
//                               rows="8"
//                               className="form-control"
//                               required value={this.state.message}
//                               onChange={this.onMsgChange.bind(this)}
//                               maxLength="65525"></textarea>
//                 </p>

//                 <p>
//                     <input name="submit" type="submit" className="btn btn-dark border-0 transform-scale-h" defaultValue="Send" />
//                 </p>
//             </form>
//         );
//     }
// }

// export default ContactForm;


















// import React, { Component } from 'react';
// import axios from 'axios';

// class ContactForm extends Component {
//     constructor( props ) {
//         super( props );

//         this.state = {
//             values: {
//                 name: '',
//                 email: '',
//                 subject: '',
//                 message: ''
//             },
//             successMessage: "Sender's message was sent successfully",
//             warningMessage: 'Fill up the form, please!',
//             errorMessage: 'Something go wrong. Try again later!',
//             alertClass: '',
//             responseMessage: '',
//             alertTimeout: '',
//             delay: 5000
//         };
//     }

//     submitForm = async e => {
//         e.preventDefault();

//         if ( document.querySelector( '#alert' ) ) {
//             document.querySelector( '#alert' ).remove();
//         }

//         this.setState( { isSubmitting: true } );

//         // axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
//         axios.post( 'noemiegrau@outlook.fr', this.state.values, {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json; charset=UTF-8'
//             },
//         }, ).then( response => {
//             if ( response.data.status === 'success' ) {
//                 this.setState( { responseMessage: this.state.successMessage } );
//             }

//             if ( response.data.status === 'warning' ) {
//                 this.setState( { responseMessage: this.state.warningMessage } );
//             }

//             if ( response.data.status === 'error' ) {
//                 this.setState( { responseMessage: this.state.errorMessage } );
//             }

//             this.callAlert( this.state.responseMessage, response.data.status )
//         } ).catch( error => {
//             this.callAlert( this.state.errorMessage, 'error' )
//         } );
//     };

//     removeAlert = () => {
//         clearTimeout( this.state.alertTimeout );
//         this.setState( {
//             alertTimeout: setTimeout( function() {
//                     var element = document.querySelector( '#alert' );
//                     element.classList.remove( 'fadeIn' );
//                     element.classList.add( 'fadeOut' );
//                     setTimeout( function() {
//                         element.remove()
//                     }, 900 )
//                 }, this.state.delay
//             )
//         } );
//     };

//     callAlert = ( message, type ) => {
//         if ( ! document.querySelector( '#alert' ) ) {
//             if ( type === 'success' ) {
//                 this.setState( { alertClass: 'success' } )
//             }

//             if ( type === 'error' ) {
//                 this.setState( { alertClass: 'danger' } )
//             }

//             if ( type === 'warning' ) {
//                 this.setState( { alertClass: 'warning' } )
//             }

//             var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

//             var element = document.querySelector( '.wpcf7-form' );

//             element.insertAdjacentHTML( 'beforeend', alert );

//             this.removeAlert();
//         }
//     };

//     handleInputChange = e =>
//         this.setState( {
//             values: {
//                 ...this.state.values,
//                 [e.target.name]: e.target.value
//             }
//         } );

//     render() {
//         return (
//             <form onSubmit={ this.submitForm } className="wpcf7-form">
//                 <p className="input-group gutter-width-30">
//                     <span className="gutter-width">
//                         <input name="name"
//                                type="text"
//                                value={ this.state.values.name }
//                                onChange={ this.handleInputChange }
//                                size="30"
//                                maxLength="245"
//                                required="required"
//                                placeholder="Name *" />
//                     </span>

//                     <span className="gutter-width">
//                         <input name="email"
//                                type="email"
//                                value={ this.state.values.email }
//                                onChange={ this.handleInputChange }
//                                size="30"
//                                maxLength="100"
//                                required="required"
//                                placeholder="Email*" />
//                     </span>
//                 </p>

//                 <p>
//                     <textarea name="subject"
//                               cols="45"
//                               rows="8"
//                               value={ this.state.values.subject }
//                               onChange={ this.handleInputChange }
//                               maxLength="65525"
//                               required="required"
//                               placeholder="Subject *"></textarea>
//                 </p>
//                 <p>
//                     <textarea name="message"
//                               cols="45"
//                               rows="8"
//                               value={ this.state.values.message }
//                               onChange={ this.handleInputChange }
//                               maxLength="65525"
//                               required="required"
//                               placeholder="Message *"></textarea>
//                 </p>

//                 <p>
//                     <input name="submit" type="submit" className="btn btn-dark border-0 transform-scale-h" defaultValue="Send" />
//                 </p>
//             </form>
//         );
//     }
// }

// export default ContactForm;
