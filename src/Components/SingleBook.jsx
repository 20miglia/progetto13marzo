import React from 'react'
import { Col, Card } from 'react-bootstrap'

function SingleBook({set}) {
    return (
      

    

        <Col key={set.asin} xs={6} md={3} lg={2}>

        <Card>
        <Card.Img variant="top" src={set.img} />
        <Card.Body>
          <Card.Title>{set.title}</Card.Title>
        </Card.Body>
        </Card>

        </Col>


     
    
)

}

export default SingleBook
