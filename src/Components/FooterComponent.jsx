import React from 'react'
import { Container, Row } from 'react-bootstrap'


function FooterComponent() {

 

  return (
    <footer className="bg-dark mt-5 text-white py-4 fix-bottom">

      <Container>
        <Row className="text-center" >
           <h2>EpiBooks</h2>
          <p>&copy; 2025 Libri Inc. | All Rights Reserved</p>

        </Row>
      </Container>




    </footer>
  )
}

export default FooterComponent
