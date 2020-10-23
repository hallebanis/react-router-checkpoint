import React,{ useState} from 'react';
import Filter from './Filter'
import MovieList from './MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie'
import movies from './Movies'

function MainList() {

  const [movie,setMovie]=useState(movies);
  const [movieTitle, setMovieTitle] = useState('')
  const [movieRating,setMovieRating]=useState(0);
  const [addedMovie,setAddedMovie]=useState(
    {
      title:"",
      description:"",
      posterUrl:"",
      rating:0
    }
  );
  
  
  //Filter States
  const handleFilterTitleChange=(titleFilter)=>setMovieTitle(titleFilter)
  const handleFilterRatingChange=(ratingFilter)=>setMovieRating(ratingFilter)
  
  
  return (
    <div className="mainList">
      <header className="mainList-header">
        <Filter onUpdateTitle={handleFilterTitleChange} onUpdateRating={handleFilterRatingChange}/>
      </header>
      <main className="mainList-main">
        <MovieList list={movie.filter(el => (el.title.toUpperCase().includes(movieTitle.toUpperCase().trim())) && el.rating>=movieRating)} />  
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default MainList;
