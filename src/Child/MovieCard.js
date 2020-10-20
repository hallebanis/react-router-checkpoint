import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function MovieCard(props){
    return(
        <Card style={{boxShadow: "6px 6px 6px grey"}}>
            <Card.Img style={{objectFit:"cover"}} variant="top" src={props.information.posterUrl} alt="Movie Poster" />
            <Card.Body>
                <Card.Title>{props.information.title}</Card.Title>
                <Card.Text>
                {props.information.description}
                </Card.Text>
                <StarRatingComponent name={props.information.title+"Rate"} value={props.information.rating} editing={false}/>
            </Card.Body>
            
        </Card>
    );
}