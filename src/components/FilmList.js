import React from 'react';
import '../App.css';

const FilmList = (props) => {
  return (
    <div className="film-list">
      {props.films.map((film, index) => (
        <div key={index} className="film-item  m-3">
          <img src={film.Poster} alt={film.Title} />
        </div>
      ))}
    </div>
  );
};

export default FilmList;
