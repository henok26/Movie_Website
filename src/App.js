import './App.css';
import { useEffect, useState } from 'react';
import FilmList from './components/FilmList';
import FilmListHeading from './components/FilmList';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [films, setFilms] = useState([]); // Define setFilms here with an initial empty array
const [searchFilm,setSearchFilm]=useState();
    const getFilmRequest = async () => {
        const url = "http://www.omdbapi.com/?s=Harry Potter&apikey=ff1e75a7";
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
        setFilms(responseJson.Search);
    };

    useEffect(() => {
        getFilmRequest();
    }, []);

    return (
        <div className="App container-fluid">
            <div className="row">
                <FilmList films={films} />
            </div>
            <div className="col">
                <FilmListHeading heading="film" />
            </div>
        </div>
    );
}

export default App;
