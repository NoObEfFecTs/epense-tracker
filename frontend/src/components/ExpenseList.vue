<template>
    <div>
      <div v-for="expense in expenses" :key="expense.id">
        <p>{{ expense.description }} - {{ expense.amount }} - {{ expense.date }}</p>
        <button @click="$emit('update', expense.id)">Edit</button>
        <button @click="deleteExpense(expense.id)">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ExpenseList',
    props: { expenses: Array },
    methods: {
      deleteExpense(id) {
        axios.delete(`/api/expenses/${id}`).then(() => {
          this.$emit('update');
        });
      }
    }
  };
  </script>
  