<template>
    <h2>{{ label }}</h2>
    <Pie
      v-bind="$attrs"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend)
  export default {
    props : {
        label : {
            type : String,
            default : ''
        },
        chartData : {
                labels : [String],
                datasets : [
                    Object
                ],
                required : true
        },
        chartOptions : {
            Object,
            default : {
                responsive : false
            }
        }
    },
    components: { Pie },
  }

  </script>