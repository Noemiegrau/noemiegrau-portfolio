import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
    performTimeConsumingTask = async () => {
        return new Promise( ( resolve ) =>
            setTimeout(
                () => {
                    resolve( 'result' )
                },
                1000
            )
        )
    };

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data  = await this.performTimeConsumingTask();
        var loading = document.getElementsByClassName( 'loading' );

        if ( data !== null ) {
            loading[0].classList.add( 'animated' );
            loading[0].classList.add( 'slideOutRight' );

            // Android check
            var ua        = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf( 'android' ) > -1;

            if ( isAndroid ) {
                loading[0].style.display( 'none' );
            }
        }
    }

    render() {
        return (
            <div className="loading">
                <div className="wrapper h-100">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="loading-content">
                            <div className="logo logo-secondary">
                                {/* <img height="400" width="600" className="animated zoomin" src="assets/img/logo/loading 2.gif" alt="Loading sign" /> */}
                                {/* Three Quarter Spinner */}

                            <div class="spinner-box">
                                <div class="three-quarter-spinner"></div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
