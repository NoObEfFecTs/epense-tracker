import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3123/api',
  withCredentials: false,
  timeout : 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getData() {
    //console.log("Getting data...")
    // data = apiClient.get('/expenses')
    // console.log(data)
    return apiClient.get('/expenses')
  },
  getExpense(id) {
    // console.log("Getting single id data", )
    return apiClient.get('/expenses/' + id)
  }
}