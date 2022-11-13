/* eslint-disable no-unused-vars */
import postService from '../services/posts'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../reducers/postReducer'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = () => {
  const dispatch = useDispatch()
  const endUser = useSelector(state => state.endUser)
  const handlePostCreation = (event) => {
    event.preventDefault()
    const newPost = {
      content: event.target.post.value,
      token: endUser.token
    }
    postService
      .create(newPost)
      .then((createdPost) => {
        console.log('result of post creation', createdPost)
        const updatedPost = { ...createdPost.data, name:endUser.name }
        dispatch(createPost(updatedPost))
        event.target.post.value = ''
      })
      .catch((error) => {
        console.log('Error happened while trying to create new post.', error)
      })
  }

  return (
    <>
      <h3>Create new post</h3>
      <form onSubmit={handlePostCreation}>
        <div>
          <FloatingLabel controlId="floatingTextarea2" label="New post">
            <Form.Control name="post" as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
          </FloatingLabel>
        </div>
        <Button variant="new" type="submit">Post</Button>
      </form>
    </>
  )
}

export default PostForm