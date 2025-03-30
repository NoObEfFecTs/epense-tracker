<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted} from 'vue'
import DatabaseService from '@/services/DatabaseService';
import ExpenseCard from '@/components/ExpenseCard.vue';

const expenses = ref(null)

onMounted(() => {
  DatabaseService.getData().then(
    (response) => {
      expenses.value = response.data.data
      // console.log(response.data.data)
      // console.log("Got data")
    })
    .catch((error) => {
      console.log(error)
    })
})

// const expenses = ref([
//   {
//     id : 1,
//     date : "2025-10-25",
//     description : "Rewe",
//     amount : 40
//   },
//   {
//     id : 2,
//     date : "2024-10-25",
//     description : "Miete",
//     amount : 100
//   },
//   {
//     id : 3,
//     date : "2025-10-25",
//     description : "Aldi",
//     amount : 35
//   }
// ])

</script>

<template>
  <div class="expenses">
    <h1>Expenses</h1>
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