import React from 'react';

const WidgetCategories = () => {
    return (
        <div id="categories-2" className="widget widget_categories">
            <h5 className="widget-title">Categories</h5>

            <ul>
                <li className="cat-item">
                    <a title="Advertising" href={ process.env.PUBLIC_URL + "/journal" }>Advertising</a>
                </li>

                <li className="cat-item">
                    <a title="Web developing" href={ process.env.PUBLIC_URL + "/journal" }>Web developing</a>
                </li>

                <li className="cat-item">
                    <a title="Graphic design<" href={ process.env.PUBLIC_URL + "/journal" }>Graphic design</a>
                </li>

                <li className="cat-item">
                    <a title="HTML" href={ process.env.PUBLIC_URL + "/journal" }>HTML</a>
                </li>

                <li className="cat-item">
                    <a title="Creative" href={ process.env.PUBLIC_URL + "/journal" }>Creative</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetCategories;
