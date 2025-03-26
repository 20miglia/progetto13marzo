import React from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

function CommentList({commentsShow}) {

    console.log(commentsShow)
    return (
       

        <ListGroup className='mt-2'>
      
          {commentsShow.map((u,i)=> <SingleComment key={i} toShow={u} /> )}

        </ListGroup>

    
    )
}

export default CommentList
