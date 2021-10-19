import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-scss';

export class PrismCode extends React.Component {
    constructor( props ) {
        super( props )
        this.ref = React.createRef()
    }

    componentDidMount() {
        this.highlight()
    }

    componentDidUpdate() {
        this.highlight()
    }

    highlight = () => {
        if ( this.ref && this.ref.current ) {
            Prism.highlightElement( this.ref.current )
        }
    }

    render() {
        const { code, plugins, language } = this.props
        return (
            <figure className="highlight">
                <pre className={ ! plugins ? "" : plugins.join( " " ) }>
                    <code ref={ this.ref } className={ `language-${ language }` }>
                        { code.trim() }
                    </code>
                </pre>
            </figure>
        )
    }
}
