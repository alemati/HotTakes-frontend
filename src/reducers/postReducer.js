const postReducer = (state = [], action) => {
  console.log('action.data in postReducer', action.data)
  console.log('action', action)
  switch (action.type) {
  case 'NEW_POST':
    return state.concat(action.data)
  case 'INIT_POSTS':
    return action.data.posts
  default: return state
  }
}

export const createPost = ( post ) => {
  return {
    type: 'NEW_POST',
    data: {
      id: post.id,
      user: post.user,
      name: post.name,
      date: post.date,
      likes: post.likes,
      content: post.content,
      comments: post.comments
    }
  }
}

export const initPosts = ( p ) => {
  let posts = p.map((originalPost) => {
    return { ...originalPost, user:originalPost.user.id, name:originalPost.user.name }
  })
  return {
    type: 'INIT_POSTS',
    data: { posts: posts }
  }
}


export default postReducer