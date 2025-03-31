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
  <RouterLink 
  class="expense-link"
  :to="{ name: 'expense-details', params : { id: expense.id } }">
    <div class="expense-card">
      <h2>{{ expense.description }} {{ expense.amount }}€</h2>
      <h4>{{ expense.category }}</h4>
      <span>{{ expense.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.expense-card {
  padding: 10px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #575757;
  margin-bottom: 18px;
}
.expense-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.expense-link {
  color: black;
  text-decoration: none;
}
</style>
