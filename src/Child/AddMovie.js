import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import StarRatingComponent from "react-star-rating-component";

export default function AddMovie(props) {
  //state relative au modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    props.onUpdateAdd(
      {
        title:"",
        description:"",
        posterUrl:"",
        rating:0
      }
    )
  }
  const handleShow = () => setShow(true);
  
  
  const handleChange = (e) => props.onUpdateAdd({...props.inputs , [e.target.name] : e.target.value})
  const handleRatingChanged = (nextValue, prevValue, name) =>props.onUpdateAdd({...props.inputs , [name] : nextValue})
  const handleAddMovie=()=>{
    if(!props.inputs.title || !props.inputs.description|| !props.inputs.description)
    alert("all field must be completed")
    else{
    props.onSave([
      ...props.list,
       props.inputs
    ]);
    handleClose();
    }
  }

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
              <FormControl
                id="titleText"
                name="title"
                placeholder="Movie Title"
                onChange={handleChange}
                aria-label="Movie Title"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <label htmlFor="basic-url">Poster's URL</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  https://example.com/img.jpg/
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" name="posterUrl" aria-describedby="basic-addon3" onChange={handleChange} />
            </InputGroup>

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Movie description</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                name="description"
                aria-label="With textarea"
                onChange={handleChange}
              />
            </InputGroup>
          </Form>
          <StarRatingComponent
            name="rating"
            onStarClick={handleRatingChanged}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
