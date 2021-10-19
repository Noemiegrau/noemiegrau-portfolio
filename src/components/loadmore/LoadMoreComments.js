import React from 'react';
import { Link } from 'react-scroll/modules';

const LoadMoreButtonComments = () => {
    return (
        <div className="loadmore spacer m-top-lg text-xl-left text-lg-left text-md-center text-center">
            <Link to="header"
                  id="comment_loadmore"
                  title="More comments"
                  spy={ true }
                  smooth={ true }
                  duration={ 900 }
                  className="btn btn-dark transform-scale-h border-0"
                  href="#header"
            >
                More comments
            </Link>
        </div>
    );
};

export default LoadMoreButtonComments;
