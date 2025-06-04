import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;