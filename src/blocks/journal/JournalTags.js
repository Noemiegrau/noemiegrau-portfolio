import React from 'react';

const JournalTags = () => {
    return (
        <div className="tags">
            <p>
                <span className="tags-title">Tags:</span>
                <a title="Art" href={ process.env.PUBLIC_URL + "/journal" }>Art</a>
                <span>,</span>
                <a title="Culture" href={ process.env.PUBLIC_URL + "/journal" }>Culture</a>
                <span>,</span>
                <a title="Capital" href={ process.env.PUBLIC_URL + "/journal" }>Capital</a>
            </p>
        </div>
    );
};

export default JournalTags;
