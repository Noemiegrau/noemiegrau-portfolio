import React from 'react';
import Gallery from '../gallery/Gallery';

const Works = () => {
    return (
        <section id="my-works" className="block spacer m-top-xl">
            <div className="wrapper">
                <h2>
                    <a title="My works" className="transform-scale-h" href={ process.env.PUBLIC_URL + "/works" }>My <span className="line">works</span></a>
                </h2>
            </div>

            <Gallery seeMore={ "true" } paddingBottomClass="" />
        </section>
    );
};

export default Works;
