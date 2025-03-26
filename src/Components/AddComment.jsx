import React, { useEffect, useState } from 'react'
import {Form, Button} from "react-bootstrap"

function AddComment({asin}) {

     const urlPost = "https://striveschool-api.herokuapp.com/api/comments/"
     const [newComment, setNewComment] = useState(

        {
           comment: "",
           rate: "",
           elementId: "",

        }
     )


      useEffect(()=> {

        setNewComment({
            ...newComment,
            elementId: asin,
          });

      }, [asin]);




//FUNZIONE PER CREARE UNA POST PER INVIARE UN COMMENTO
const sendComment = async (e) => {
    e.preventDefault() // > previene il caricamento della pagina al momento dell'invio
    try {
      let response = await fetch(
        urlPost,
        {
          method: 'POST',
          body: JSON.stringify(newComment),
          headers: {
            'Content-type': 'application/json',
             Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZTZkZjFlMTQwNjAwMTUzMTRkMGQiLCJpYXQiOjE3NDI5MTY1MDYsImV4cCI6MTc0NDEyNjEwNn0.95vzuF2tazAuVpYBEPPBpjUfV4t_4-aJgnN7KlAaHDo",
          },
        }
      )
      //Se la risposta dall'API avviene con successo:
      //1.appare un alert di conferma
      //2.lo stato del commento ritorna allo stato iniziale, si resetta
      if (response.ok) {
        alert('Recensione inviata!')
        setNewComment({
          comment: '',
          rate: "",
          elementId: "",
        })
      } else {
        throw new Error('Devi inserire tutti i campi') // in caso contrario appare un msg di errore
      }
    } catch (error) {
      alert(error)
    }
  }













    return (


        <div className='my-3'>
            <Form onSubmit={sendComment}>
                <Form.Group className="mb-3">
                    <Form.Label>Lascia qui la tua recensione</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci il testo" value={newComment.comment}
                    
                    onChange={(e) => setNewComment ({

                        ...newComment,
                        comment: e.target.value,
                    })}
                    
                    />
                </Form.Group>

                <Form.Select aria-label="Default select example" value={newComment.rate}
                
                onChange={(e) => setNewComment ({

                    ...newComment,
                    rate: e.target.value,
                })}
                
                >
                    <option>Apri il menù per una valutazione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </Form.Select>

                <Button variant="success" type="submit">Invia</Button>
            </Form>

        </div>

    )
}

export default AddComment
