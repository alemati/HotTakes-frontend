import axios from 'axios'
const baseUrl = '/api/comments'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = (newCommentData) => {
  const config = {
    headers: { Authorization: `Bearer ${newCommentData.token}` }
  }
  return axios.post(baseUrl, newCommentData, config)
}

// const update = (id, newObject) => {
//   return axios.put(`${baseUrl}/${id}`, newObject)
// }

// const deletePerson = id => {
//   return axios.delete(`${baseUrl}/${id}`)
// }

export default { getAll, create
  // create, update, deletePerson
}