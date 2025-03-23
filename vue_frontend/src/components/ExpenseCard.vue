<script setup>
import { ref } from "vue"

defineProps({
  expense: {
    type: Object,
    required: true,
  },
})

// const expense = ref({
//   id : 1,
//   date : "2025-03-15",
//   amount : 30,
//   description : "test"
// })

</script>

<template>
  <div class="expense-card">
    <h2>{{ expense.description }}</h2>
    <span>{{ expense.amount }} spent on {{ expense.date }}</span>
  </div>
</template>

<style scoped>
.expense-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.expense-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.expense-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
