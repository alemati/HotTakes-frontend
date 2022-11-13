const enduserReducer = (state = null, action) => {
  console.log('action', action)
  console.log('state is:', state)
  switch (action.type) {
  case 'SET_ENDUSER':
    return action.data
  case 'REMOVE_ENDUSER':
    return null
  default: return state
  }
}

export const setEndUser = ( endUserData ) => {
  return {
    type: 'SET_ENDUSER',
    data: endUserData
  }
}

export const removeEndUser = () => {
  return {
    type: 'REMOVE_ENDUSER'
  }
}

export default enduserReducer