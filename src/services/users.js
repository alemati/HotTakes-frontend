import axios from 'axios'
const baseUrl = '/api/users'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = (newUser) => {
  return axios.post(baseUrl, newUser)
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