import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            values: {
                comment: '',
                author: '',
                email: '',
                url: ''
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

            var element = document.querySelector( '#comment-form' );

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
            <form onSubmit={ this.submitForm } id="comment-form" className="comment-form">
                <p className="comment-notes">Your email address will not be published. Required fields are marked <span className="required">*</span></p>

                <p className="comment-form-comment">
                    <textarea
                        id="comment"
                        name="comment"
                        cols="45"
                        rows="8"
                        value={ this.state.values.comment }
                        onChange={ this.handleInputChange }
                        maxLength="65525"
                        required="required"
                        placeholder="Comments *"></textarea>
                </p>

                <p className="input-group gutter-width-30">
                    <span className="gutter-width">
                        <input id="author"
                               name="author"
                               type="text"
                               value={ this.state.values.author }
                               onChange={ this.handleInputChange }
                               size="30"
                               maxLength="245"
                               required="required"
                               placeholder="Name *" />
                    </span>

                    <span className="gutter-width">
                        <input id="email"
                               name="email"
                               type="email"
                               value={ this.state.values.email }
                               onChange={ this.handleInputChange }
                               size="30"
                               maxLength="100"
                               required="required"
                               placeholder="Email *" />
                    </span>
                </p>

                <p className="comment-form-url">
                    <input id="url"
                           name="url"
                           type="url"
                           value={ this.state.values.url }
                           onChange={ this.handleInputChange }
                           size="30"
                           maxLength="200"
                           placeholder="Website *" />
                </p>

                <p className="comment-form-cookies-consent custom-control custom-checkbox">
                    <input id="wp-comment-cookies-consent" className="custom-control-input" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />

                    <label className="custom-control-label" htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                </p>

                <p className="form-submit">
                    <input name="submit" type="submit" className="btn btn-dark border-0 transform-scale-h" defaultValue="Submit" />
                </p>
            </form>
        );
    }
}

export default CommentForm;
