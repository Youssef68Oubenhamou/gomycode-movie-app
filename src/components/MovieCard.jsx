import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
    const navigate = useNavigate();

    return (
        <div
        style={{ border: '1px solid #ccc', padding: '1rem', width: '200px', cursor: 'pointer' }}
        onClick={() => navigate(`/movie/${movie.id}`)}
        >
            <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <h3>{movie.title}</h3>
            <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
    );
}

export default MovieCard;