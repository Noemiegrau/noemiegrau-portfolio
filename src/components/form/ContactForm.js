import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                name: '',
                email: '',
                message: ''
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };
    }

    submitForm = async e => {
        e.preventDefault();

        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }

        this.setState( { isSubmitting: true } );

        axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }, ).then( response => {
            if ( response.data.status === 'success' ) {
                this.setState( { responseMessage: this.state.successMessage } );
            }

            if ( response.data.status === 'warning' ) {
                this.setState( { responseMessage: this.state.warningMessage } );
            }

            if ( response.data.status === 'error' ) {
                this.setState( { responseMessage: this.state.errorMessage } );
            }

            this.callAlert( this.state.responseMessage, response.data.status )
        } ).catch( error => {
            this.callAlert( this.state.errorMessage, 'error' )
        } );
    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );
        this.setState( {
            alertTimeout: setTimeout( function() {
                    var element = document.querySelector( '#alert' );
                    element.classList.remove( 'fadeIn' );
                    element.classList.add( 'fadeOut' );
                    setTimeout( function() {
                        element.remove()
                    }, 900 )
                }, this.state.delay
            )
        } );
    };

    callAlert = ( message, type ) => {
        if ( ! document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertClass: 'success' } )
            }

            if ( type === 'error' ) {
                this.setState( { alertClass: 'danger' } )
            }

            if ( type === 'warning' ) {
                this.setState( { alertClass: 'warning' } )
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector( '.wpcf7-form' );

            element.insertAdjacentHTML( 'beforeend', alert );

            this.removeAlert();
        }
    };

    handleInputChange = e =>
        this.setState( {
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        } );

    render() {
        return (
            <form onSubmit={ this.submitForm } className="wpcf7-form">
                <p className="input-group gutter-width-30">
                    <span className="gutter-width">
                        <input name="name"
                               type="text"
                               value={ this.state.values.name }
                               onChange={ this.handleInputChange }
                               size="30"
                               maxLength="245"
                               required="required"
                               placeholder="Name *" />
                    </span>

                    <span className="gutter-width">
                        <input name="email"
                               type="email"
                               value={ this.state.values.email }
                               onChange={ this.handleInputChange }
                               size="30"
                               maxLength="100"
                               required="required"
                               placeholder="Email/Phone no. *" />
                    </span>
                </p>

                <p>
                    <textarea name="message"
                              cols="45"
                              rows="8"
                              value={ this.state.values.message }
                              onChange={ this.handleInputChange }
                              maxLength="65525"
                              required="required"
                              placeholder="Message *"></textarea>
                </p>

                <p>
                    <input name="submit" type="submit" className="btn btn-dark border-0 transform-scale-h" defaultValue="Send" />
                </p>
            </form>
        );
    }
}

export default ContactForm;
