import React from 'react';
import { Link } from 'react-scroll';

const LoadMoreButton = () => {
    return (
        <div className="loadmore spacer m-top-lg text-xl-left text-lg-left text-md-center text-center">
            <Link to="header"
                  title="Loadmore"
                  spy={ true }
                  smooth={ true }
                  duration={ 900 }
                  className="btn btn-dark transform-scale-h border-0"
                  href="#header"
            >
                Loadmore
            </Link>
        </div>
    );
};

export default LoadMoreButton;
