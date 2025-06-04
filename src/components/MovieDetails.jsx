import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails({ movies }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) return <h2>Movie not found</h2>;

    return (
        <div style={{ padding: '2rem' }}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="Trailer"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <br />
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
}

export default MovieDetails;
