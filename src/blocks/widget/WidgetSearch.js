import React from 'react';

const WidgetSearch = () => {
    return (
        <div id="search-2" className="widget widget_search">
            <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + "/search-results" }>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type something to search" name="s" title="Type something to search" />

                    <div className="input-group-append">
                        <button type="submit" className="btn btn-link transform-scale-h border-0 p-0">
                            <span>Search</span>
                            <i className="icon-c icon-arrow-right" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WidgetSearch;
