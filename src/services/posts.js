import axios from 'axios'
const baseUrl = '/api/posts'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = (newPostData) => {
  const config = {
    headers: { Authorization: `Bearer ${newPostData.token}` }
  }
  return axios.post(baseUrl, newPostData, config)
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