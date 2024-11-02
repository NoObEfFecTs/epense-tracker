<template>
    <div>
      <button @click="openModal">Add Expense</button>
      <div v-if="showModal">
        <input v-model="description" placeholder="Description" />
        <input v-model="amount" placeholder="Amount" type="number" />
        <input v-model="date" placeholder="Date" type="date" />
        <button @click="saveExpense">Save</button>
        <button @click="showModal = false">Cancel</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ExpenseModal',
    data() {
      return {
        showModal: false,
        description: '',
        amount: '',
        date: ''
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      saveExpense() {
        const newExpense = {
          description: this.description,
          amount: parseFloat(this.amount),
          date: this.date
        };
        axios.post('/api/expenses', newExpense).then(() => {
          this.$emit('save');
          this.showModal = false;
        });
      }
    }
  };
  </script>
  