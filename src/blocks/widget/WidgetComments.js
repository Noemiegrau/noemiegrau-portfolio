import React from 'react';

const WidgetComments = () => {
    return (
        <div id="recent-comments-2" className="widget widget_recent_comments">
            <h5 className="widget-title">Recent Comments</h5>

            <ul id="recentcomments">
                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="Jellyfish season" href={ process.env.PUBLIC_URL + "/journal-single-post#comments" }> Jellyfish season</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="Hacking industry" href={ process.env.PUBLIC_URL + "/journal-single-post#comments" }> Hacking industry</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="The Voyage of the Eye" href={ process.env.PUBLIC_URL + "/journal-single-post#comments" }> The Voyage of the Eye</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="Wind of Names" href={ process.env.PUBLIC_URL + "/journal-single-post#comments" }> Wind of Names</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="The Twinkling Year" href={ process.env.PUBLIC_URL + "/journal-single-post#comments" }> The Twinkling Year</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetComments;
