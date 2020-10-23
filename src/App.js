import React,{ useState} from 'react';
import Filter from './Child/Filter'
import MovieList from './Child/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Child/AddMovie'
import MainList from './Child/MainList'
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import MovieDetails from './Child/MovieDetails'
import MovieTrailer from './Child/MovieTrailer'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
       
      </div>
      <Switch>
        <Route exact path="/" component={MainList} />
        <Route exact path="/:title" component={MovieDetails} />
        <Route path="/:title/trailer" component={MovieTrailer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
