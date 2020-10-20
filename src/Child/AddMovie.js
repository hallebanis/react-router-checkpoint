import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import StarRatingComponent from 'react-star-rating-component';



export default function AddMovie(props){
    const [show, setShow] = useState(false);
    const [movieTitle,setMovieTitle]=useState("")
    const[MoviePosterUrl,setMoviePosterUrl]=useState("")
    const[MovieDescription,setMovieDescription]=useState("")
    const[movieRating,setMovieRating]=useState(0)

    const handleClose = () => {
        setShow(false);
        setMovieTitle("");
        setMovieDescription("");
        setMoviePosterUrl("");
        setMovieRating(0);
    };
    const handleShow = () => setShow(true);
    const handleSave=()=>{
        if(!movieTitle || !MovieDescription || !MoviePosterUrl)
            alert("all field must be completed");
        else{
        let movieInformation={
            title:movieTitle,
            description:MovieDescription,
            posterUrl:MoviePosterUrl,
            rating:movieRating
        };
        props.onSave(movieInformation);
        handleClose();
            }
        }
    
    const handleChangePosterUrl=(e) =>setMoviePosterUrl(e.target.value)
    const handleChangeTitle=(e)=>setMovieTitle(e.target.value)
    const handleChangeDescription=(e)=>setMovieDescription(e.target.value)
    const handleRatingChanged = (nextValue, prevValue, name) =>setMovieRating(nextValue)
        
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add movie
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Movie information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="titleText" placeholder="Movie Title" onChange={handleChangeTitle} aria-label="Movie Title" aria-describedby="basic-addon1"/>
                </InputGroup>


                <label htmlFor="basic-url">Poster's URL</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                            https://example.com/img.jpg/
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={handleChangePosterUrl} />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Movie description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" onChange={handleChangeDescription} />
                </InputGroup>
            </Form>
            <StarRatingComponent name="addMovieRating" onStarClick={handleRatingChanged}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}