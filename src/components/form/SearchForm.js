import React from 'react';
import ButtonSearch from '../../components/button/ButtonSearch';

const SearchForm = () => {
    return (
        <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + "/search-results" }>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Type something to search" name="s" title="Type something to search" />

                <div className="input-group-append">
                    <ButtonSearch />
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
