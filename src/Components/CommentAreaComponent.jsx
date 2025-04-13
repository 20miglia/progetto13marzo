import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
import SpinnerComponent from './SpinnerComponent';
import ErrorComponent from './ErrorComponent';

function CommentAreaComponent({asin}) {

    const url = "https://striveschool-api.herokuapp.com/api/books/"
    const [comments, setComments] = useState([]);
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
   


    useEffect (() => {
       
       setLoad(true)

       fetch(url + asin + "/comments/",

        {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZTZkZjFlMTQwNjAwMTUzMTRkMGQiLCJpYXQiOjE3NDQ1NTA3NDUsImV4cCI6MTc0NTc2MDM0NX0.RBC_SdmYaJNl5reP45UIHoJ1Iiv6m9aFlBktNPo8y_4',
            },
          })
       .then(response => response.json())
       .then(data => {setComments(data)
                      setLoad(false)
                      setError(false)
                                      })
        .catch(err =>{
          console.log(err)
          setError(true)
    })
       

      

         }, [asin]  )


       const updateComment = (id) => {

        setComments(word => word.filter(test => test._id !== id))
       }


    return (
      <>
      <div className='text-center' role='long-area'>
        {load && <SpinnerComponent/>}
        {error && <ErrorComponent />}

        <CommentList commentsShow={comments} updateComment={updateComment}/>
        <AddComment asin={asin} />
      
      </div>
      
      </>

    )
}

export default CommentAreaComponent
