/* eslint-disable no-unused-vars */
import commentsService from '../services/comments'
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from '../reducers/commentsReducer'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CommentList from './CommentList'

const CommentForm = ({ post }) => {
  const dispatch = useDispatch()
  const endUser = useSelector(state => state.endUser)

  const handleCommentCreation = (event) => {
    event.preventDefault()
    const newComment = {
      content: event.target.comment.value,
      user: endUser.id,
      postId: post.id,
      token: endUser.token
    }
    console.log('newComment is:', newComment)
    commentsService
      .create(newComment)
      .then((createdComment) => {
        console.log('result of comment creation', createdComment)
        dispatch(createComment(createdComment.data))
        event.target.comment.value = ''
      })
      .catch((error) => {
        console.log('Error happened while trying to create new comment.', error)
      })
  }

  return (
    <>
      <div className="row">
        <div className="column left">
          <CommentList post={post}/>
        </div>
        <div className="column right">
          <h5>Write a comment</h5>
          <form onSubmit={handleCommentCreation}>
            <div>
              <FloatingLabel controlId="floatingComment" label="New comment">
                <Form.Control name="comment" as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
              </FloatingLabel>
            </div>
            <Button variant="new" type="submit">Comment</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CommentForm