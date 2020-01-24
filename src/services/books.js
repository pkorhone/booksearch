import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

const getAll = async () => {
  const response = await axios.get(`${BASE_URL}/books`)
  return response.data
}

const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`)
  return response.data
}

const simpleSearch = async (searchTerm) => {
  const response = await axios.get(`${BASE_URL}/search?term=${searchTerm}`)
  return response.data
}

export default { getAll, getCategories, simpleSearch }