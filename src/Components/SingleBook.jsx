import React, { useState } from 'react'
import { Col, Card, Button} from 'react-bootstrap'
import CommentAreaComponent from './CommentAreaComponent'
import {useNavigate} from 'react-router-dom'

function SingleBook({set, selected, setSelected}) {
  const navigate = useNavigate()
     // const [selected, setSelected] = useState(false)
    
     // const changeColor = () => {

     //      setSelected(!selected)
     // }

    
    
    
     return (
      

       <>
        
        <Col key={set.asin} xs={6} md={3} lg={2}>
        

         <Card onClick={()=>setSelected(set.asin)} className={selected=== set.asin? "border border-danger border-4":""}> 
         <Card.Img variant="top" src={set.img}/>  
         <Card.Body>
          <Card.Title>{set.title}</Card.Title>
          <Button
            variant="primary"
            onClick={() => navigate(`/book/${set.asin}`)}
          >
            VAI AI DETTAGLI
          </Button>
         </Card.Body>
         </Card>
         
         {/* {selected && <CommentAreaComponent asin={set.asin}/>} */}

         </Col>
         
         
        
        
      
      </> 
     
    
)

}

export default SingleBook
