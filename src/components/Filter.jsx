import React from 'react';

function Filter({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <input
                type="text"
                placeholder="Filter by title"
                value={titleFilter}
                onChange={(e) => onTitleChange(e.target.value)}
                style={{ marginRight: '1rem' }}
            />
            <input
                type="number"
                placeholder="Min rating"
                value={ratingFilter}
                onChange={(e) => onRatingChange(e.target.value)}
            />
        </div>
    );
}

export default Filter;

