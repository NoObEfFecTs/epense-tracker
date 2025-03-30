<script setup>
import { ref, onMounted } from 'vue'
import DatabaseService from '@/services/DatabaseService'
import ExpenseModifier from '@/components/ExpenseModifier.vue'

const props = defineProps({
  id: {
    required: true,
  },
})

const expense = ref(null)

onMounted(() => {
  DatabaseService.getExpense(props.id)
    .then((response) => {
      expense.value = response.data.data
      // console.log("Data: ",response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="overview">
    <div class="expense" v-if="expense">
      <h1>{{ expense.description }}</h1>
      <p>{{ expense.amount }} on {{ expense.date }}</p>
    </div>
    <!-- <ExpenseModifier :expense="expense" :key="expense.id"></ExpenseModifier> -->
  </div>
</template>

<style scoped>
.expense {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #575757;
}
</style>