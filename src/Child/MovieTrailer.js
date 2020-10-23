import React,{ useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from 'react-bootstrap/esm/Image';



function MovieTrailer({src}) {
  return (
    <div className="movieTrailer">
     
     <iframe width="560" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
    </div>
  );
}

export default MovieTrailer;