/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import loginService from '../services/login'
import { useDispatch } from 'react-redux'
import { setEndUser } from '../reducers/enduserReducer'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    const loginData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    event.target.username.value = ''
    event.target.password.value = ''
    console.log('loginData is:', loginData)
    loginService
      .login(loginData)
      .then((endUser) => {
        window.localStorage.setItem(
          'loggedEndUser', JSON.stringify(endUser)
        )
        dispatch(setEndUser(endUser))
        navigate('/')
      })
      .catch((error) => {
        console.log('Error happened while attempting to login:', error)
      })
  }

  return (
    <>
      <div className="boxCenter">
        <form onSubmit={handleLogin}>
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                <FloatingLabel controlId="floatingUsername" label="Username">
                  <Form.Control name="username" placeholder="Username" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" name="password" placeholder="Password" />
                </FloatingLabel>
              </Card.Text>
              <div className='main'>
                <Button type="submit" variant="primary">Login</Button>
                <Link className='linkfloatleft' to="/signup"> Sign up</Link>
              </div>
            </Card.Body>
          </Card>
        </form>
      </div>
    </>
  )
}

export default LoginForm