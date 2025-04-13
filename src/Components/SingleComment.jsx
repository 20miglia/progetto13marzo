import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'

function SingleComment({ toShow, updateComment }) {

    const deleteComment = async (asin) => {
        try {
          let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/comments/' + asin,
            {
              method: 'DELETE',
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZTZkZjFlMTQwNjAwMTUzMTRkMGQiLCJpYXQiOjE3NDQ1NTA3NDUsImV4cCI6MTc0NTc2MDM0NX0.RBC_SdmYaJNl5reP45UIHoJ1Iiv6m9aFlBktNPo8y_4"
              },
            }
          )
          if (response.ok) {
            //se il commento vien eliminato, chiama la funzione per aggiornare la lista dei commenti
            updateComment(toShow._id)
            alert('La recensione è stata eliminata!')
          } else {
            throw new Error('La recensione non è stata eliminata!')
          }
        } catch (error) {
          alert(error)
        }
      }



    return (

        <ListGroupItem 
         
        key={toShow._id}>

            {toShow.comment}

            <Button variant="danger" 
                size='sm'
                className='ms-2 float-end'
                onClick={() => deleteComment(toShow._id)}>
                Elimina
            </Button>

        </ListGroupItem>

    )
}

export default SingleComment
