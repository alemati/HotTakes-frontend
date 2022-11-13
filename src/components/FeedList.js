/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CommentForm from './CommentForm'

import React, { useState } from 'react'

const FeedList = () => {
  const [selected, setSelected] = useState('all')
  return (
    <>
      <ButtonGroup>
        <Button variant="flat" onClick={() => setSelected('all')}>All</Button>
        <Button variant="flat" onClick={() => setSelected('my')}>My</Button>
        {/* <Button variant="todo" onClick={() => setSelected('friends')}>Friends</Button> */}
      </ButtonGroup>

      {selected === 'all' ? <AllPosts /> :
        selected === 'my' ? <MyPosts /> :
          <FriendsPosts />}
    </>
  )
}

const AllPosts = () => {
  const allPosts = useSelector(state => state.posts)
  return (
    <>
      <h3>All Posts</h3>
      <div className="postList">
        <Accordion flush>
          {allPosts.map(post => <Post key={post.id} post={post}></Post>)}
        </Accordion>
      </div>
    </>
  )
}

const MyPosts = () => {
  const endUser = useSelector(state => state.endUser)
  const myPosts = useSelector(({ posts }) => {
    return [...posts].filter(post => post.user === endUser.id)
  })
  return (
    <>
      <h3>My posts</h3>
      <div className="postList">
        <Accordion flush>
          {myPosts.map(post => <Post key={post.id} post={post}></Post>)}
        </Accordion>
      </div>

    </>
  )
}

const FriendsPosts = () => {
  return (
    <>
      <h3>Posts of my friedns</h3>
    </>
  )
}

const Post = ({ post }) => {
  const date = String(Date(post.date)).slice(4, 15)
  return (
    <>
      <Accordion.Item eventKey={post.id} >
        <Accordion.Header>
          <div>
            <p>{post.name}´s post from {date}</p>
            <h4>{post.content}</h4>
          </div>
        </Accordion.Header>
        <Accordion.Body>

          <CommentForm post={ post }/>

        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default FeedList