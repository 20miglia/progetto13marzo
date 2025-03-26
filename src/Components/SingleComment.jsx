import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

function SingleComment({toShow}) {
    return (

        <ListGroupItem> 
            
            {toShow.comment}
            
        </ListGroupItem>
        
    )
}

export default SingleComment
