import React from 'react';
import "./movie.css";

export default function Movie({movie, setCurrentGenre}){
    return (
        <div className="movie-container">
            <h4>{movie.title}</h4>
            <img src={`https://image.tmdb.org/t/p/w500`+movie.backdrop_path} alt=''/>
        </div>
    )
}
