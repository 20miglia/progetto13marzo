import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

function CommentAreaComponent({asin}) {

    const url = "https://striveschool-api.herokuapp.com/api/books/"
    const [comments, setComments] = useState([]);
   


    useEffect (() => {

       fetch(url + asin + "/comments/",

        {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZTZkZjFlMTQwNjAwMTUzMTRkMGQiLCJpYXQiOjE3NDI5MTY1MDYsImV4cCI6MTc0NDEyNjEwNn0.95vzuF2tazAuVpYBEPPBpjUfV4t_4-aJgnN7KlAaHDo',
            },
          })
       .then(response => response.json())
       .then(data => setComments(data))


         }, [asin]  )





    return (
      <>
      <div className='text-center'>

        <CommentList commentsShow={comments}/>
        <AddComment asin={asin} />
      
      </div>
      
      </>

    )
}

export default CommentAreaComponent
