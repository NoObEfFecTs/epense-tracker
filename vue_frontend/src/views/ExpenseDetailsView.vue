<script setup>
import { ref, onMounted } from 'vue'
import DatabaseService from '@/services/DatabaseService'
import ExpenseModifier from '@/components/ExpenseModifier.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'

const props = defineProps({
  id: {
    required: true,
  },
})

const expense = ref(null)
const categories = ref(null)
const opts = [
  "test1",
  "test2",
  "test3"
]

onMounted(() => {
  DatabaseService.getExpense(props.id)
    .then((response) => {
      expense.value = response.data.data
      console.log("Expense: ",response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
    DatabaseService.getCategories()
    .then((response) => {
      categories.value = response.data.data
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
      <h3>{{ expense.category }}</h3>
      <p>{{ expense.amount }} on {{ expense.date }}</p>
      <label>Select a category</label>
      <select v-model="expense.category"
          ><option
          v-for="option in categories"
          :value="option.category"
          :key="option.category"
          >{{ option.category }}</option>
      </select>

      <BaseSelect
        :options="categories"
        opt_key='category'
        v-model="expense.category"
        label="Select category"
      />

      <label>Select date</label>
      <input v-model="expense.date" type="date" name="date" class="field">
      <BaseInput
        v-model="expense.description"
        label="Description"
        type="text"
      />
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