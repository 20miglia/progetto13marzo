import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap'
import CommentAreaComponent from './CommentAreaComponent'

function SingleBook({set}) {

     const [selected, setSelected] = useState(false)
    
     const changeColor = () => {

          setSelected(!selected)
     }

    
    
    
     return (
      

       <>
        
        <Col key={set.asin} xs={6} md={3} lg={2}>
        

         <Card onClick={changeColor} className={selected? "border border-danger border-4":""}> 
         <Card.Img variant="top" src={set.img}/>  
         <Card.Body>
          <Card.Title>{set.title}</Card.Title>
         </Card.Body>
         </Card>
         
         {selected && <CommentAreaComponent asin={set.asin}/>}

         </Col>
         
         
        
        
      
      </> 
     
    
)

}

export default SingleBook
