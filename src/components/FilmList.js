import React from 'react';
import '../App.css';
import AddFavourite from './AddFavourite';

const FilmList = (props) => {
  // Check if props.films is an array before attempting to map over it
  if (!Array.isArray(props.films)) {
    // Handle the case where props.films is not an array
    return <div>No films available</div>;
  }

  return (
    <div className="film-list">
      {props.films.map((film, index) => (
        <div key={index} className="image-container d-flex justify-content-start m-3">
          <img src={film.Poster} alt={film.Title} />
          <div onClick={() => props.favouritesChosen(film)} className="overlay d-flex align-items-center justified-content-center">
            {/* Render the Favourite component with onClick */}
            <AddFavourite />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmList;
