<script setup>
import { ref, onMounted } from 'vue'
import DatabaseService from '@/services/DatabaseService'

const props = defineProps({
  id: {
    required: true,
  },
})

const expense = ref(null)

// onMounted(() => {
//   DatabaseService.getExpense(props.id)
//     .then((response) => {
//       expense.value = response.data
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })
</script>

<template>
  <div v-if="expense">
    <h1>Ausgabe</h1>
    <p>{{ expense.amount }} on {{ expense.date }}</p>
    <p>{{ expense.description }}</p>
  </div>
</template>
