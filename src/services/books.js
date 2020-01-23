import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

const getAll = async () => {
  const response = await axios.get(`${BASE_URL}/books`)
  console.log(response.data)
  return response.data
}

const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`)
  console.log(response.data)
  return response.data
}

const simpleSearch = async (searchTerm) => {
  const response = await axios.get(`${BASE_URL}/search?term=${searchTerm}`)
  console.log(response.data)
  return response.data
}

export default { getAll, getCategories, simpleSearch }