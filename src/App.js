
import './App.css';
import {useState} from 'react';
import FilmList from './components/FilmList';

//const[state,setState]=useState([initialState])
const App=()=>{
    const [films] = useState([  {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "imdbID": "tt1201607",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "Year": "2001",
        "imdbID": "tt0241527",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Chamber of Secrets",
        "Year": "2002",
        "imdbID": "tt0295297",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"
    }]);
return(
<div className="App">
    <FilmList films={films}/>
<h1>Hello</h1>

</div>

);

}


export default App;
