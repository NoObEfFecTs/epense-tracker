import axios from 'axios';

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
  getLastExpenses(n) {
    return apiClient.get('/expenses/last/' + n)
  },
  
  getExpenses() {
    return apiClient.get('/expenses')
  },

  getCategories() {
    return apiClient.get('/categories')
  },
  
  getExpense(id) {
    // console.log("Getting single id data", )
    return apiClient.get('/expenses/' + id)
  },
  getExpensebyCat(start_date, end_date) {
    return apiClient.post('/expenses/category', data={"start_date" : start_date, "end_date" : end_date})
  },
  getExpenseforCat(category, start_date, end_date) {
    return apiClient.post('/expenses/category/' + category, data={"start_date" : start_date, "end_date" : end_date})
  }

}


