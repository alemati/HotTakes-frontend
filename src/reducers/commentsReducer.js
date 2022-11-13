const commentsReducer = (state = [], action) => {
  console.log('action.data in commentsReducer', action.data)
  console.log('action', action)
  switch (action.type) {
  case 'NEW_COMMENT':
    return state.concat(action.data)
  case 'INIT_COMMENTS':
    return action.data.comments
  default: return state
  }
}

export const createComment = ( comment ) => {
  console.log('comment in actionCreator', comment)
  return {
    type: 'NEW_COMMENT',
    data: {
      id: comment.id,
      user: comment.user,
      post: comment.post,
      date: comment.date,
      likes: comment.likes,
      content: comment.content
    }
  }
}

export const initComments = ( comments ) => {
  console.log('comments in actionCreator', comments)
  return {
    type: 'INIT_COMMENTS',
    data: { comments: comments }
  }
}


export default commentsReducer