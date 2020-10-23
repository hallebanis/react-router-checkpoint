import React,{ useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import movies from './Movies'
import Tab from 'react-bootstrap/Tab'
import {Link} from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import MovieTrailer from './MovieTrailer';

function MovieDtails(props) {
  const [movieList,setMovieList]=useState(movies)
  let m=movieList.filter(elm=>elm.title===props.match.params.title)
  return (
    <div className="movieDtails container" style={{margin:"10px auto",border:"1px solid"}}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="movieDescription" title="Movie Description">
            <h1>{m[0].title}</h1>
            <p> {m[0].description}</p>
            <Link to="/">Back to home page</Link>
        </Tab>
        <Tab eventKey="trailer" title="Watch the trailer">
            <MovieTrailer src={m[0].trailerUrl}/>
        </Tab>
</Tabs>
      </div>
    
  );
}

export default MovieDtails;