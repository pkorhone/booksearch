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

const advancedSearch = async (searchTerms) => {
  const params = []
  if (searchTerms.author) params.push(`author=${searchTerms.author}`)
  if (searchTerms.title) params.push(`title=${searchTerms.title}`)
  if (searchTerms.description) params.push(`description=${searchTerms.description}`)
  if (searchTerms.publisher) params.push(`publisher=${searchTerms.publisher}`)
  if (searchTerms.year) params.push(`year=${searchTerms.year}`)

  let paramStr = ''
  params.forEach((param, indx, array) => {
    paramStr += param
    if (indx !== array.length-1) {
      paramStr += '&'
    }
  })

  const response = await axios.get(`${BASE_URL}/detailedsearch?${paramStr}`)
  return response.data
}

export default { getAll, getCategories, simpleSearch, advancedSearch }