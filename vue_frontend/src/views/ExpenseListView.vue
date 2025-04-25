<script setup>
import { ref, onMounted} from 'vue'
import DatabaseService from '@/services/DatabaseService';
import ExpenseCard from '@/components/ExpenseCard.vue';
import BaseSelect from '@/components/BaseSelect.vue'
import ExpenseModifier from '@/components/ExpenseModifier.vue';

const expenses = ref(null)

const n_exp = ref(5)

const options = {
  "1" : 1,
  "3" : 3,
  "5" : 5,
  "10" : 10
}

onMounted(() => {
  get_data(n_exp.value)
})

function get_data(n){
  DatabaseService.getLastExpenses(n).then(
    (response) => {
      expenses.value = response.data.data
      // console.log(response.data.data)
      // console.log("Got data")
    })
    .catch((error) => {
      console.log(error)
    })
}

</script>

<template>
  <div class="expenses">
    <h1>Expenses</h1>
    <BaseSelect
      :options="options"
      v-model="n_exp"
      label="Number of elements"
    />
    <ExpenseCard v-for="element in expenses" :key="element.id" :expense="element"/>
  </div>
</template>

<style scoped>
.expenses {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>