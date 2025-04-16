<script setup>
import DatabaseService from '@/services/DatabaseService';
import BaseInput from '@/components/BaseInput.vue';
// import BaseChart from '@/components/BaseChart.vue';
import TestChart from '@/components/TestChart.vue';

import { ref, onMounted} from 'vue';

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
// import { Pie } from 'vue-chartjs';

var date = new Date();
var date_str = date.toJSON().slice(0, 10);
var firstDay = new Date(date.getFullYear(), date.getMonth(), 2)
var firstDay_str = firstDay.toJSON().slice(0, 10)

// console.log(firstDay , "-->" , firstDay.toJSON())

const start_date = ref(firstDay_str)
const end_date = ref(date_str)

const categories = []

const chart_data_test = ref({
  labels: [ ],
  datasets: [ { data: [] } ]
})

// const chartInstance = this.$attrs

onMounted(() => {
  DatabaseService.getExpensebyCat().then(
    (response) => {
      var tmp = response.data.data
      // console.log(response.data.data)
      chart_data_test.value = {
        labels: [ ],
        datasets: [ { data: [] } ]
      }
      for (const element of tmp) {
        var sum = element["SUM(amount)"]
        var cat = element["category"]
        // console.log("Cat: ", cat, "Sum: ", sum)
        // console.log("Chart: ", chartInstance)
        chart_data_test.value["labels"].push(cat)
        chart_data_test.value["datasets"][0]["data"].push(sum)
      }
      // console.log("Got data", chart_data_test.value)
    })
    .catch((error) => {
      console.log(error)
    })
  // DatabaseService.getCategories().then(
  //   (response) => {
  //     var resp = response.data.data
  //     for (const element of resp){
  //       categories.push(element["category"])
  //     }
  //     console.log("Cats: ", categories)
  //   }
  // )
})

</script>
<template>
  <div class="overview">
    <h1>This is the overview page</h1>
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
    <TestChart label="Overview" :chartData="chart_data_test">No data</TestChart>
    <!-- <TestChart v-for="cat in categories" :chartData="chart_data_test">No data</TestChart> -->
  </div>
</template>