import React from 'react';

function MovieCard({ movie }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
    );
}

export default MovieCard;