const userReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
  case 'NEW_USER':
    return state.concat(action.data)
  case 'INIT_USERS':
    return action.data.users
  default: return state
  }
}

export const createUser = ( user ) => {
  return {
    type: 'NEW_USER',
    data: {
      id: user.data.id,
      name: user.data.name,
      username: user.data.username,
      friends: user.data.friends,
      received: user.data.received,
      requests: user.data.requests,
      posts: user.data.posts
    }
  }
}

export const initUsers = ( users ) => {
  return {
    type: 'INIT_USERS',
    data: { users }
  }
}


export default userReducer