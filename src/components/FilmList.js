import React from 'react';

const FilmList = (props) => {
  return (
    <>
      {props.films.map((film, index) => (
        <div >
          <img src={film.Poster} alt={film.Title} />
        </div>
      ))}
    </>
  );
};

export default FilmList;
