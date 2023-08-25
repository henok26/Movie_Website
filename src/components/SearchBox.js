import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="enter movie title"
        value={props.value} // Use props.value instead of props.Value
        onChange={(event) => props.setSearchFilm(event.target.value)} // Use event.target.value
      />
    </div>
  );
};

export default SearchBox;
