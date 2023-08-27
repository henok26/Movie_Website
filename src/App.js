import './App.css';
import { useEffect, useState } from 'react';
import FilmList from './components/FilmList';
import FilmListHeading from './components/FilmListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState(""); // Initialize as an empty string
  const [favouriteFilms,setFavouriteFilms]=useState("");

  const getFilmRequest = async (searchQuery) => {
    const apiKey = "ff1e75a7";
    const url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setFilms(responseJson.Search);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (searchFilm.trim() !== "") {
      getFilmRequest(searchFilm);
    }
  }, [searchFilm]);
 const  AddFavouriteFilm=(film)=>{
const newFavouriteList=[...favouriteFilms];
setFavouriteFilms(newFavouriteList);
 }

  return (
    <div className="App container-fluid">
      <div className="row d-flex align-items-center mb-4">
        <FilmListHeading heading="Films" />
        <SearchBox searchFilm={searchFilm} setSearchFilm={setSearchFilm} />
      </div>
      <div className="row">
        <FilmList films={films} favouritesChosen={AddFavouriteFilm} favourites={AddFavourite} />
       

      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <FilmListHeading heading="Your Favourites" />
        
      </div>
      <div className="row">
        <FilmList films={favouriteFilms} favouritesChosen={AddFavouriteFilm} favourites={AddFavourite} />
       

      </div>
    </div>
  );
};

export default App;
