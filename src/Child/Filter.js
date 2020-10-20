import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/FormControl'





export default function Filter(props){
    
    
    return(
        <Navbar sticky="bottom" bg="light" variant="light">
           <FormControl type="text" placeholder="Search" style={{width:"20vw"}} onChange={e => props.onUpdateTitle(e.target.value)} className="mr-sm-1" />
           <StarRatingComponent name="movieRatingFilter" onStarClick={(value)=>props.onUpdateRating(value)}/>
        </Navbar>
  
    );
}