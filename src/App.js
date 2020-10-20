import React,{ useState} from 'react';
import Filter from './Child/Filter'
import MovieList from './Child/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Child/AddMovie'

function App() {

  const [movie,setMovie]=useState(
    [
      {
        title:"The Godfather",
        description:"The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of one of his sons, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.",
        posterUrl:"https://images-na.ssl-images-amazon.com/images/I/316cWXCZLwL.jpg",
        rating:5
      },
      {
        title:"007 Skyfall",
        description:"The story centres on Bond investigating an attack on MI6 that leads to a wider plot by former agent Raoul Silva to discredit and kill M as revenge for abandoning him. It sees the return of two recurring characters after an absence of two films: Q, played by Ben Whishaw, and Miss Moneypenny, played by Naomie Harris.",
        posterUrl:"https://images-na.ssl-images-amazon.com/images/I/71w5Uy7hlpL._SY450_.jpg",
        rating:2
      },
      {
        title:"Saving private Ryan",
        description:"The film tells the story of Captain John H. Miller (played by Tom Hanks), who leads a platoon of GIs during the D-Day invasion of Normandy near the end of World War II. Their initial mission, along with nearly 175,000 other Allied service men, is to liberate France and defeat the Nazis.",
        posterUrl:"https://images-na.ssl-images-amazon.com/images/I/416Z6SAFJTL._AC_.jpg",
        rating:3
      }
    ]
  );
  const [movieTitle, setMovieTitle] = useState('')
  const [movieRating,setMovieRating]=useState(0);
  const [addedMovie,setAddedMovie]=useState(
    {
      title:"",
      description:"",
      posterUrl:"",
      rating:0
    }
  )
  
  const handleAddMovie=(o)=>{
    setMovie([
      ...movie,
      {
        title: o.title,
        description: o.description,
        posterUrl:o.posterUrl,
        rating:o.rating
      }
    ]);
  }
  //Filter States
  const handleFilterTitleChange=(titleFilter)=>setMovieTitle(titleFilter)
  const handleFilterRatingChange=(ratingFilter)=>setMovieRating(ratingFilter)
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Filter onUpdateTitle={handleFilterTitleChange} onUpdateRating={handleFilterRatingChange}/>
      </header>
      <main className="App-main">
        <MovieList list={movie.filter(el => (el.title.toUpperCase().includes(movieTitle.toUpperCase().trim())) && el.rating>=movieRating)} />  
      </main>
      <footer>
      <AddMovie onSave={handleAddMovie}/>
      </footer>
    </div>
  );
}

export default App;
