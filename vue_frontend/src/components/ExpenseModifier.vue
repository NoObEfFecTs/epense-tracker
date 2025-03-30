<script setup>
import { ref, onMounted } from "vue"
import DatabaseService from "@/services/DatabaseService"

defineProps({
  expense: {
    type: Object,
    required: true,
  },
})

const categories = ref(null)

onMounted(() => {
  DatabaseService.getCategories()
    .then((response) => {
      categories.value = response.data.data
      // console.log("Categories: ",response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>

<template>
    <div class="expense-mod">
      <h2>{{ expense.description }}</h2>
      <label>Select a category</label>
      <select v-model="expense.description"
          ><option
          v-for="option in categories"
          :value="option.category"
          :key="option.category"
          >{{ option.category }}</option>
      </select>
      <label>Select date</label>
      <input type="date" name="date" class="field">
    </div>
</template>

<style scoped>

.expense-mod {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
