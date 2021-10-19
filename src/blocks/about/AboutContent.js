import React from 'react';

const AboutContent = () => {
    return (
        <div id="about" className="block">
            <h2>
                <span className="line">A passionate</span><br/> photographer, designer in media.
            </h2>

            <div className="row bg-half-ring-left gutter-width-lg">
                <div className="col align-self-top pl-0">
                    <div className="img object-fit">
                        <div className="object-fit-cover">
                            <img src="assets/img/placeholder/527x600.jpg" alt="Luca Reynolds" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="col align-self-center description">
                    <h4>I’m Luca Reynolds</h4>

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
