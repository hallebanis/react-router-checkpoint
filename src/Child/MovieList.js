import React from 'react'
import MovieCard from './MovieCard'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MovieList(props){
    return(
        
            
        <CardDeck style={{alignItems:"flex-end",flexWrap:"nowrap"}}>
            {props.list.map(elm=>{
                return(<MovieCard information={elm}/>)
            })}
            
        </CardDeck>
       
    );
}