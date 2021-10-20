import React from 'react';
import AwardItemsData from '../../data/awards/awards';

const Awards = () => {
    return (
        <div id="Skills" className="block spacer p-top-xl">
            <h2 title="Skills" className="text-left transform-scale-h">
                <span className="line">My skills</span>
            </h2>

            <div className="row gutter-width-lg with-pb-lg">
                { AwardItemsData && AwardItemsData.map( ( item, key ) => {
                    return (
                        <div key={ key } className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body p-large">
                                    <h4>{ item.title }</h4>
                                    <p className="mt-0">{ item.position }</p>
                                </div>
                            </div>
                        </div>
                    );
                } ) }
            </div>
        </div>
    );
};

export default Awards;
