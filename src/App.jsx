import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';

function App() {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Inception',
            description: 'A mind-bending thriller.',
            posterURL: 'https://m.media-amazon.com/images/I/51xJbFMRsxL.jpg',
            rating: 5,
            trailer: 'https://www.youtube.com/embed/8hP9D6kZseM'
        },
        {
            id: 2,
            title: 'Breaking Bad',
            description: 'A high school chemistry teacher turned drug dealer.',
            posterURL: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
            rating: 4,
            trailer: 'https://www.youtube.com/embed/8hP9D6kZseM'
        },
    ]);

    const [titleFilter, setTitleFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState(0);

    const [newMovie, setNewMovie] = useState({
        id: null,
        title: '',
        description: '',
        posterURL: '',
        rating: 0,
        trailer: ''
    });

    const addMovie = () => {
        if (!newMovie.title || !newMovie.posterURL) return alert('Fill title and poster URL!');
        setMovies([...movies, {...newMovie , id: movies.length + 1}]);
        setNewMovie({ id: null, title: '', description: '', posterURL: '', rating: 0 , trailer: '' });
    };

    const filteredMovies = movies.filter((movie) => {
        return (
            movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            movie.rating >= ratingFilter
        );
    });

    return (
        <Router>
            <Routes>
                <Route
                path="/"
                element={
                    <div style={{ padding: '2rem' }}>
                    <h1>🎬 Movie App</h1>
                    <Filter
                        titleFilter={titleFilter}
                        ratingFilter={ratingFilter}
                        onTitleChange={setTitleFilter}
                        onRatingChange={(val) => setRatingFilter(Number(val))}
                    />

                    <div style={{ marginBottom: '2rem' }}>
                        <h2>Add New Movie</h2>
                        <input type="text" placeholder="Title" value={newMovie.title}
                        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
                        <input type="text" placeholder="Description" value={newMovie.description}
                        onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
                        <input type="text" placeholder="Poster URL" value={newMovie.posterURL}
                        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
                        <input type="text" placeholder="Trailer Link" value={newMovie.trailer}
                        onChange={(e) => setNewMovie({ ...newMovie, trailer: e.target.value })} />
                        <input type="number" placeholder="Rating" value={newMovie.rating}
                        onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })} />
                        <button onClick={addMovie}>Add Movie</button>
                    </div>

                    <MovieList movies={filteredMovies} />
                    </div>
                }
                />
                <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
            </Routes>
        </Router>
    );
}

export default App;
