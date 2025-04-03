import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFoundComponent() {
    return (
        <Container className="text-center py-5">
           <h1 className="display-1">404: Page Not Found</h1>
           <p className="lead mb-4">The page you are looking for does not exist.</p>
           <Link to="/" className="btn btn-dark">
            Return to Home
           </Link>
       </Container>
        
    )
}

export default NotFoundComponent
