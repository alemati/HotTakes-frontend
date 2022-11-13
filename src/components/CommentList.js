/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import React, { useState } from 'react'

const CommentList = ({ post }) => {
  const commentsToPost = useSelector(({ comments }) => {
    return [...comments].filter(comment => comment.post === post.id)
  })
  return (
    <>
      <h4>Comments</h4>
      <div className="postList">
        <Accordion flush>
          {commentsToPost.map(comment => <Comment key={comment.id} comment={comment}></Comment>)}
        </Accordion>
      </div>
    </>
  )
}

const Comment = ({ comment }) => {
  return (
    <>
      <div>
        <p>{comment.content}</p>
      </div>
    </>
  )
}

export default CommentList