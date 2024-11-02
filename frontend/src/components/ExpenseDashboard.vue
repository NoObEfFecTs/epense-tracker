<template>
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseModal @save="fetchExpenses" />
      <ExpenseList :expenses="expenses" @update="fetchExpenses" />
    </div>
  </template>
  
  <script>
  import ExpenseList from './ExpenseList.vue';
  import ExpenseModal from './ExpenseModal.vue';
  import axios from 'axios';
  
  export default {
    name: 'ExpenseDashboard',
    components: { ExpenseList, ExpenseModal },
    data() {
      return { expenses: [] };
    },
    methods: {
      fetchExpenses() {
        axios.get('/api/expenses').then(response => {
          this.expenses = response.data.data;
        });
      }
    },
    created() { this.fetchExpenses(); }
  };
  </script>
  