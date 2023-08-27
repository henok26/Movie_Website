import React from 'react';
import '../App.css';

const FilmList = (props) => {

 const Favourite = props.favourites; // Change 'favourite' to 'favourites'
  return (
    <div className="film-list">
      {props.films.map((film, index) => (
        <div key={index} className="image-container d-flex justify-content-start  m-3">
          <img src={film.Poster} alt={film.Title} />
          <div className="overlay d-flex align-items-center justified-content-center">
            
            <Favourite/>
            </div>
        </div>
      ))}
    </div>
  );
};

export default FilmList;
