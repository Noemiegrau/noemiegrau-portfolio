import React from 'react';

const JournalMeta = () => {
    return (
        <div className="meta">
            <p>
                <span><a className="text-secondary a-small bold" href={ process.env.PUBLIC_URL + "/journal-single-post" }>By admin</a></span>

                <span className="text-secondary s-small bold">-</span>

                <span className="text-secondary s-small bold">Comments (4)</span>

                <span className="text-secondary s-small bold">-</span>

                <span className="category"><a title="Travel" className="text-secondary a-small bold" href={ process.env.PUBLIC_URL + "/journal" }>Travel</a></span>
            </p>
        </div>
    );
};

export default JournalMeta;
