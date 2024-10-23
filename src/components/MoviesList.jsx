import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', genre: 'Sci-Fi', description: 'A thief who enters the dreams of others to steal secrets.', showDetails: false },
        { id: 2, title: 'The Dark Knight', genre: 'Action', description: 'Batman faces the Joker in Gotham City.', showDetails: false },
        { id: 3, title: 'Pulp Fiction', genre: 'Crime', description: 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.', showDetails: false },
        { id: 4, title: 'The Avengers', genre: 'Action', description: 'Earth\'s mightiest heroes must come together to save the world.', showDetails: false },
    ]);

    const [showOnlyAction, setShowOnlyAction] = useState(false);

    const toggleDetails = (id) => {
        setMovies(movies.map(movie => 
            movie.id === id ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const toggleView = () => {
        setShowOnlyAction(!showOnlyAction);
    };

    const filteredMovies = showOnlyAction ? movies.filter(movie => movie.genre === 'Action') : movies;

    return (
        <div>
            <h1>Favorite Movies</h1>
            <button onClick={toggleView}>
                {showOnlyAction ? 'Show All Movies' : 'Show Only Action Movies'}
            </button>
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        <span onClick={() => toggleDetails(movie.id)}>{movie.title}</span>
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                        {movie.showDetails && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
