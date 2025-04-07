import React, { useEffect, useState } from 'react'
import Books from '../External/history.json'
import { useParams } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import CommentAreaComponent from './CommentAreaComponent'


function BookDetailsComponent() {
    const params = useParams()
    const searchBook = Books.find((next) => next.asin === params.asin)

    return (

        <Row className="justify-content-center">
            <Col md={3}>
                <Card>
                    <Card.Img variant="top" src={searchBook.img} />
                    <Card.Body>
                        <Card.Title>{searchBook.title}</Card.Title>
                        
                    </Card.Body>
                    <h3 className='text-center'>Price {searchBook.price}€</h3>
                </Card>
                <CommentAreaComponent asin={searchBook.asin} />
            </Col>
        </Row>

    )

}

export default BookDetailsComponent
