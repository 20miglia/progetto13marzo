import React from 'react'
import Books from '../External/history.json'
import { Card, Container, Row, Col } from 'react-bootstrap';



const arrayBooks = Books

function AllTheBooksComponent() {
    return (
     
     <Container className="mt-4">
      <Row>

        {arrayBooks.map((u) =>
        

        <Col key={u.asin} xs={6} md={3} lg={2}>

        <Card>
        <Card.Img variant="top" src={u.img} />
         <Card.Body>
          <Card.Title>{u.title}</Card.Title>
          <Card.Text>
              {u.price}
         </Card.Text>
        </Card.Body>
        </Card>
      
      
        </Col>
      
      
         )}

       </Row>
    </Container>

        
        
    )
}

export default AllTheBooksComponent
