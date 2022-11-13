/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import MainPage from './components/MainPage'
import SignUpPage from './components/SignUpPage'
import userService from './services/users'
import postService from './services/posts'
import commentService from './services/comments'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, initUsers } from './reducers/userReducer'
import { createPost, initPosts } from './reducers/postReducer'
import { createComment, initComments } from './reducers/commentsReducer'
import { setEndUser } from './reducers/enduserReducer'
import { useNavigate } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes, Route, Link, Navigate
} from 'react-router-dom'


const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Check loggened endUser effect started.')
    const loggedEndUserJSON = window.localStorage.getItem('loggedEndUser')
    if (loggedEndUserJSON) {
      const endUser = JSON.parse(loggedEndUserJSON)
      dispatch(setEndUser(endUser))
    }
  }, [dispatch])

  useEffect(() => {
    console.log('initUsers effect started.')
    userService
      .getAll()
      .then((users) => dispatch(initUsers(users)))
  }, [dispatch])

  useEffect(() => {
    console.log('initPosts effect started.')
    postService
      .getAll()
      .then((posts) => {
        console.log('fetched posts are:', posts)
        dispatch(initPosts(posts))
      })
      .catch((error) => {
        console.log('Error happened while trying to init posts:', error)
      })
  }, [dispatch])

  useEffect(() => {
    console.log('initComments effect started.')
    commentService
      .getAll()
      .then((comments) => {
        console.log('fetched comments are:', comments)
        dispatch(initComments(comments))
      })
      .catch((error) => {
        console.log('Error happened while trying to init comments:', error)
      })
  }, [dispatch])

  const loggedEndUserJSON = window.localStorage.getItem('loggedEndUser')

  return (
    // <div className="row d-flex justify-content-center">
    <div className="container col-sm-5" >
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={loggedEndUserJSON ? (<MainPage />) : (<Navigate replace to={'/login'} />)} />
      </Routes>
    </div>

  // </div>
  )

}

export default App
