import React from 'react';
import ExperienceItemsData from '../../data/experience/experience';

const MyExperience = () => {
    return (
        <div id="my-experience" className="block spacer p-top-xl">
            <h2>My <span className="line">experience.</span></h2>

            <div className="row gutter-width-lg with-pb-lg">
                { ExperienceItemsData && ExperienceItemsData.map( ( item, key ) => {
                    return (
                        <div key={ key } className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card border-0">
                                <div className="card-body p-0">
                                    <h4>{ item.title }</h4>

                                    <p className="p-small text-secondary bold">{ item.date }</p>

                                    <p>{ item.description }</p>
                                </div>
                            </div>
                        </div>
                    );
                } ) }
            </div>
        </div>
    );
};

export default MyExperience;
