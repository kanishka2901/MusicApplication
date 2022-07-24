import { Form, Button } from "react-bootstrap"
import axios from 'axios';

import {useContext, useState} from 'react';
import { toast } from 'react-toast';

const EditDetails =(e) => {
    /*
    e.preventDefault()
    axios.put(`${base_url}"/updateMusic/{id}"`).then( 
      (response) => {
        console.log(response.data);
        toast.success("Updated");
        setSongs(response.data);
        getAllMusicFromServer();
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
    */
  }
const EditForm = () =>{


    


  

    const handleSubmit = (e) => {
        e.preventDefault();
    
    }

     return (

        <Form onSubmit={EditDetails}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Song Name"
                    name="name"
                    value="abcd"
                    //onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Artist *"
                    name="artist"
                    value="arijit singh"
                    //onChange={(e)=> setArtist(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="text"
                    placeholder="Genre"
                    
                    name="genre"
                    value="hjj"
                    //onChange={(e)=> setGenre(e.target.value)}
                />
            </Form.Group>
            
            <Button variant="success" type="submit" block>
                Edit details
            </Button>
        </Form>

     )
}

export default EditForm;