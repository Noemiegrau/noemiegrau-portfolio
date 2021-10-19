import React from 'react';
import { Link } from 'react-scroll/modules';

const CommentsReply = () => {
    return (
        <div className="comment-reply">
            <Link
                title="Reply"
                className="comment-reply-link btn btn-link p-0 transform-scale-h border-0 scroll-to-id"
                to="reply-title"
                spy={ true }
                smooth={ true }
                duration={ 900 }
                href="#"
            >
                <i className="icon-c icon-arrow-left"/>Reply
            </Link>
        </div>
    );
};

export default CommentsReply;
