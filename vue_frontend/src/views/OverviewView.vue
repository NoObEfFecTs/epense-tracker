<script setup>
import { ref, onMounted} from 'vue'
import DatabaseService from '@/services/DatabaseService';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../stores/chartConfig'

import BaseInput from '@/components/BaseInput.vue';

ChartJS.register(ArcElement, Tooltip, Legend)

var date = new Date();
var date_str = date.toJSON().slice(0, 10);
var firstDay = new Date(date.getFullYear(), date.getMonth(), 2)
var firstDay_str = firstDay.toJSON().slice(0, 10)

console.log(firstDay , "-->" , firstDay.toJSON())

const start_date = ref(firstDay_str)
const end_date = ref(date_str)

const data = {
  labels: [],
  datasets: [
    {
      data: []
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}


// onMounted(() => {
//   DatabaseService.getExpensebyCat().then(
//     (response) => {
//       tmp = response.data.data
//       console.log(response.data.data)
//       for (const element of tmp) {
//         data["datasets"][0]["data"].push(tmp["SUM(amount)"])
//         data["labels"].push(tmp["category"])
//       }
//       console.log("Got data", data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })

</script>
<template>
  <div class="overview">
    <h1>This is the overview page</h1>
  </div>
  <BaseInput
        v-model="start_date"
        label="start date"
        type="date"
      />
  <BaseInput
        v-model="end_date"
        label="end date"
        type="date"
      />
  <Pie :data="data" :options="options" />
</template>




<style>

</style>