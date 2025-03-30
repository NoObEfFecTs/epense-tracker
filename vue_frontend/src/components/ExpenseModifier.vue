<script setup>
import { ref } from "vue"

defineProps({
  expense: {
    type: Object,
    required: true,
  },
})

</script>

<template>
    <h1>Update exisiting events</h1>
    <label>Select a category</label>
    <select v-model="expense.description">
        <option
            v-for="option in categories"
            :value="option"
            :key="option"
            :selected="option === expense.description">{{ option }}</option>
    </select>
    <h3>Enter date:</h3>
    <label>Date</label>
    <input
        v-model="expense.date"
        type="date"
        placeholder="Date"
        class="field"
    >
</template>

<style scoped>

</style>
