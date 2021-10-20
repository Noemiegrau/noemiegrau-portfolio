import React from 'react';

const Reviews = () => {
    return (
        <section id="review" className="block spacer p-top-xl">
            <div className="wrapper">
                <h2 className="text-left">
                    <a title="Reviews" className="transform-scale-h" href={ process.env.PUBLIC_URL + "/journal" }>
                        <span className="line">What people said about me</span>
                    </a>
                </h2>
            </div>

            <div>
                <p>Put REVIEWS here</p>
            </div>
        </section>
    );
};

export default Reviews;
