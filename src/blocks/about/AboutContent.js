import React from 'react';

const AboutContent = () => {
    return (
        <div id="about" className="block">
            <div className="row bg-half-ring-left gutter-width-lg">
                <div className="col align-self-top pl-0">
                    <div className="img object-fit">
                        <div className="object-fit-cover">
                            <img src="assets/img/logo/Headshot-black.png" className="img-fluid" alt="Noemie Grau" />
                        </div>
                    </div>
                </div>

                <div className="col align-self-center description">
                    <p>I am a <strong>Full Stack Software Engineer</strong> with a <strong>Master's Degree in Operational and International Marketing</strong> from Paris Nanterre University and a <strong>Full Stack Web Development</strong> certificate from <strong>UCLA</strong> Extension. Originally from <strong>France</strong>, I am now living in <strong>Los Angeles</strong>.</p>

                    <p>Throughout my software training, I applied my analytical and organizational skills in building user-friendly applications with <strong>solid and comprehensive databases</strong> (using technologies such as <strong>JavaScript, React, MySQL, and MongoDB</strong>) and applied agile development principles coupled with version control, testing, code review, and collaborative coding.</p>

                    <p>I love using my knowledge in data <strong>structure and algorithms</strong> to problem-solve. Recognized by my peers as a <strong>leader</strong>, I possess a <strong>high cultural sensitivity</strong> and strong communication skills gained by working with diverse teams in <strong>Europe, Asia and America</strong>. I also <strong>speak English, French, Lingala, some Spanish and Mandarin</strong>. I aim to keep applying my marketing proficiency in understanding users’ needs while exploiting my passion for programming to build the perfect software.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
