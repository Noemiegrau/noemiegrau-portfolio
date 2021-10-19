import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ResponsiveImages = () => {
    return (
        <div id="responsive-images">
            <h4>Responsive images</h4>

            <div className="bd-example">
                <img src="assets/img/placeholder/600x600.jpg" className="img-fluid" alt="UI Content" />
            </div>

            <PrismCode
                code={ '<img src="assets/img/placeholder/600x600.jpg" className="img-fluid" alt="UI Content" />' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ResponsiveImages;
