/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import usersService from '../services/users'
import { useDispatch } from 'react-redux'
import { createUser } from '../reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUpPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignUp = (event) => {
    event.preventDefault()
    console.log('handleSignUp was triggered')
    const newUser = {
      name: event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value
    }
    usersService
      .create(newUser)
      .then((createdUser) => {
        dispatch(createUser(createdUser))
        event.target.username.value = ''
        event.target.password.value = ''
        event.target.name.value = ''
        navigate('/')
      })
      .catch((error) => {
        console.log('Error happened while truing to create new user:', error)
      })
  }

  return (
    <>
      <div className="boxCenter">
        <form onSubmit={handleSignUp}>
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                <FloatingLabel controlId="floatingNewUsername" label="Username">
                  <Form.Control name="username" placeholder="Username" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingNewName" label="Name">
                  <Form.Control name="name" placeholder="Username" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingNewPassword" label="Password">
                  <Form.Control type="password" name="password" placeholder="Password" />
                </FloatingLabel>
              </Card.Text>
              <div className='main'>
                <Button type="submit" variant="primary">Sign up</Button>
                <Link className='linkfloatleft' to="/">Back</Link>
              </div>
            </Card.Body>
          </Card>
        </form>
      </div>

    </>
  )
}

export default SignUpPage