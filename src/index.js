import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import userReducer from './reducers/userReducer'
import endUserReducer from './reducers/enduserReducer'
import postReducer from './reducers/postReducer'
import commentsReducer from './reducers/commentsReducer'
import { configureStore } from '@reduxjs/toolkit'
import './index.css'


const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
    endUser: endUserReducer,
    comments: commentsReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
