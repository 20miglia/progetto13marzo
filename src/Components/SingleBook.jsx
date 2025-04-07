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
        
        <Col key={set.asin} className='col'>
        

         <Card onClick={()=>setSelected(set.asin)} 
         style={{border: selected === set.asin ? '3px solid red' : 'none',}} 
         data-testid="longBook"> 
         <Card.Img variant="top" src={set.img}/>  
         <Card.Body className='cardBody'>
          <Card.Title>{set.title}</Card.Title>
          <Button
            variant="dark"
            onClick={() => navigate(`/book/${set.asin}`)}
          >
            View Details
          </Button>
         </Card.Body>
         </Card>
         
         {/* {selected && <CommentAreaComponent asin={set.asin}/>} */}

         </Col>
         
         
        
        
      
      </> 
     
    
)

}

export default SingleBook
