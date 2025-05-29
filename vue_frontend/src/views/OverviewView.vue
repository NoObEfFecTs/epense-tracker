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
const cat_char_data = ref({})

const colors = ["red", "green", "blue", "yellow", "orange", "purple", "grey"]

var cat = ""


const chart_data_test = ref({
  labels: [ ],
  datasets: [ { data: [], backgroundColor: [] } ],
})

// const chartInstance = this.$attrs

onMounted(() => {
  DatabaseService.getExpensebyCat(start_date, end_date).then(
    (response) => {
      var tmp = response.data.data
      // console.log(response.data.data)
      chart_data_test.value = {
        labels: [ ],
        datasets: [ { data: [] } ]
      }
      var i = 0;
      for (const element of tmp) {
        var sum = element["SUM(amount)"]
        var cat = element["category"]
        // console.log("Cat: ", cat, "Sum: ", sum)
        // console.log("Chart: ", chartInstance)
        chart_data_test.value["labels"].push(cat)
        chart_data_test.value["datasets"][0]["data"].push(sum)
        // chart_data_test.value["datasets"][0]["backgroundColor"].push(colors[i])
        i ++;
        console.log(i)
      }
      // console.log("Got data", chart_data_test.value)
    })
    .catch((error) => {
      console.log(error)
    })
  //   DatabaseService.getCategories().then(
  //     (response) => {
  //       var resp = response.data.data
  //       for (const element of resp){
  //         cat = element["category"]
  //         categories.push(cat)
          
  //         DatabaseService.getExpenseforCat(cat).then(
  //           (resp) => {
  //             var tmp_data = resp.data.data
  //             var tmp_cat = resp.request.responseURL.split("/")[6]
  //             if (tmp_data.length > 0) {
  //                   // console.log("data available")
  //                   // console.log(tmp_cat,"Data: ", tmp_data)
  //                   cat_char_data.value[tmp_cat] = {
  //                     datasets : [
  //                       {
  //                         data : [],
  //                         labels : []
  //                       }
  //                     ]
  //                   }
  //                   for (const comp of tmp_data){
  //                     // console.log("Comp", comp)
  //                     cat_char_data.value[tmp_cat]["datasets"][0]["labels"].push(comp["description"])
  //                     cat_char_data.value[tmp_cat]["datasets"][0]["data"].push(comp["SUM(amount)"])
  //                   }
  //                 }
  //             // console.log(Object.keys(cat_char_data))
  //           }
  //         )
  //     }
  //     console.log("Cats: ", categories)
  //     console.log("Cat_data: ", cat_char_data)
  //     console.log("test", cat ,Object.keys(cat_char_data._rawValue))
  //   }
  // )
  // .catch((error) => {
  //     console.log(error)
  // })
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
    <!-- <TestChart v-for="cat in categories" :label="cat" :chartData="chart_data_test">No data found</TestChart> -->
  </div>
</template>