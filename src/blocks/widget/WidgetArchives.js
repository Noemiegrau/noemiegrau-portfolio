import React from 'react';

const WidgetArchives = () => {
    return (
        <div id="archives-2" className="widget widget_archive">
            <h5 className="widget-title">Archives</h5>

            <ul>
                <li>
                    <a title="March 2020" href={ process.env.PUBLIC_URL + "/journal" }>March 2020</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetArchives;
