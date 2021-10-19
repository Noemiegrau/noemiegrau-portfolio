import React from 'react';
import LoadMoreButtonComments from '../../components/loadmore/LoadMoreComments';
import CommentForm from '../../components/form/CommentForm';
import CommentsReply from '../../components/button/CommentsReply';

const JournalComments = () => {
    return (
        <div id="comments" className="comments-area block spacer m-top-xl">
            <div className="comment-title">
                <h2>
                    <span className="line">4 Comments</span>
                </h2>
            </div>

            <ul className="comment-list list-unstyled">
                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-header clearfix">
                                <div className="float-left">
                                    <h6 className="comment-author">
                                        <a title="Tom Harrison" href={ process.env.PUBLIC_URL + "/journal-single-post" }>Tom Harrison</a>
                                    </h6>

                                    <div className="comment-time">
                                        <p className="p-small text-secondary bold">May 15, 2020 3:23 pm</p>
                                    </div>
                                </div>

                                <div className="float-right">
                                    <CommentsReply />
                                </div>
                            </div>

                            <div className="comment-content">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                            </div>
                        </div>

                        <ul className="children">
                            <li className="comment">
                                <div className="comment-wrapper">
                                    <div className="comment-details">
                                        <div className="comment-header clearfix">
                                            <div className="float-left">
                                                <h6 className="comment-author">
                                                    <a title="Wilson Joe" href={ process.env.PUBLIC_URL + "/journal-single-post" }>Wilson Joe</a>
                                                </h6>

                                                <div className="comment-time">
                                                    <p className="p-small text-secondary bold">May 15, 2020 3:23 pm</p>
                                                </div>
                                            </div>

                                            <div className="float-right">
                                                <CommentsReply />
                                            </div>
                                        </div>

                                        <div className="comment-content">
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-header clearfix">
                                <div className="float-left">
                                    <h6 className="comment-author">
                                        <a title="Arthur James" href={ process.env.PUBLIC_URL + "/journal-single-post" }>Arthur James</a>
                                    </h6>

                                    <div className="comment-time">
                                        <p className="p-small text-secondary bold">May 15, 2020 3:23 pm</p>
                                    </div>
                                </div>

                                <div className="float-right">
                                    <CommentsReply />
                                </div>
                            </div>

                            <div className="comment-content">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-header clearfix">
                                <div className="float-left">
                                    <h6 className="comment-author">
                                        <a title="Joe Eddison" href={ process.env.PUBLIC_URL + "/journal-single-post" }>Joe Eddison</a>
                                    </h6>

                                    <div className="comment-time">
                                        <p className="p-small text-secondary bold">May 15, 2020 3:23 pm</p>
                                    </div>
                                </div>

                                <div className="float-right">
                                    <CommentsReply />
                                </div>
                            </div>

                            <div className="comment-content">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <LoadMoreButtonComments />

            <div id="respond" className="comment-respond block spacer p-top-xl">
                <h2 id="reply-title" className="comment-reply-title">Leave a <span className="line">reply</span>
                    <a rel="nofollow" id="cancel-comment-reply-link" className="btn btn-link p-0 border-0 transform-scale-h" href={ process.env.PUBLIC_URL + "/journal-single-post" } style={ { display: "none" } }>Cancel reply</a>
                </h2>

                <CommentForm />
            </div>
        </div>
    );
};

export default JournalComments;
