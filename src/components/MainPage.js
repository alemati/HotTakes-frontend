/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import enduserReducer from '../reducers/enduserReducer'
import { removeEndUser } from '../reducers/enduserReducer'
import { useNavigate } from 'react-router-dom'
import userReducer from '../reducers/userReducer'
import FeedList from './FeedList'
import PostForm from './PostForm'
import Button from 'react-bootstrap/Button'

const MainPage = () => {
  const dispatch = useDispatch()
  const endUser = useSelector(state => state.endUser)
  const navigate = useNavigate()

  const handleLogout = (event) => {
    event.preventDefault()
    console.log('handleLogout was twiggered.')
    window.localStorage.clear()
    dispatch(removeEndUser())
    navigate('/login')
  }
  return (
    <>
      {endUser !== null ?
        <div>
          <div className='main'>
            <h2>HotTakesApp</h2>
            {/* <Button variant="btn-logout" onClick={handleLogout}>logout</Button> */}
            <Button className='btn-logout' onClick={handleLogout}>logout</Button>
          </div>
          <div>
              Logged in as {endUser.name}
          </div>
          <FeedList />
          <PostForm />
        </div>
        :
        <p>loading...</p>}
    </>
  )
}

export default MainPage