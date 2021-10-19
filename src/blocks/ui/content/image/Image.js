import React from 'react';
import ResponsiveImages from '../../content/image/children/ResponsiveImages';
import ObjectFitSize from '../../content/image/children/ObjectFitSize';

const Image = () => {
    return (
        <div id="image" className="block spacer m-top-xl">
            <h2>
                <span className="line">Image</span>
            </h2>

            <p>Information for opting your images into responsive behaviour (images never become larger than their parent elements). All of the image styles are added via classes.</p>

            <ResponsiveImages />

            <ObjectFitSize />
        </div>
    );
};

export default Image;
