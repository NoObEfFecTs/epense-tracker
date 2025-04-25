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

const expense = ref({})
const categories = ref([])

onMounted(() => {
  DatabaseService.getExpense(props.id)
    .then((response) => {
      expense.value = response.data.data
      // console.log("Expense: ",response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
    DatabaseService.getCategories()
    .then((response) => {
      var tmp = response.data.data
      var cats = []  
      for (const element of tmp) {
        cats.push(element["category"])
      }
      categories.value = cats
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
      <p>{{ expense.amount }} € on {{ expense.date }}</p>
      <BaseSelect
        :options="categories"
        v-model="expense.category"
        label="Select category"
      />
      <BaseInput
        v-model="expense.date"
        label="date"
        type="date"
      />
      <BaseInput
        v-model="expense.description"
        label="Description"
        type="text"
      />
    </div>
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