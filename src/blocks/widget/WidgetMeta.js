import React from 'react';

const WidgetCategories = () => {
    return (
        <div id="meta-2" className="widget widget_meta">
            <h5 className="widget-title">Meta</h5>

            <ul>
                <li>
                    <a title="Log in" href={ process.env.PUBLIC_URL + "/journal" }>Log in</a>
                </li>

                <li>
                    <a title="Entries RSS" href={ process.env.PUBLIC_URL + "/journal" }>Entries <abbr title="Really Simple Syndication">RSS</abbr></a>
                </li>

                <li>
                    <a title="Comments RSS" href={ process.env.PUBLIC_URL + "/journal" }>Comments <abbr title="Really Simple Syndication">RSS</abbr></a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetCategories;
