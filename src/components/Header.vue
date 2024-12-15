<template>
  <h2>Ausgaben Tracker</h2>
  <button class="nav-btn">Jahresübersicht</button>
  <button class="nav-btn">Kosten hinzufügen</button>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
  <!-- <Pie
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  /> -->
  
</template>

<script>

import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March', 'May' ],
        datasets: [ { data: [40, 20, 12, 16] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}

// export default {
//   name: 'PieChart',
//   components: { Pie },
//   data() {
//     return {
//       chartData: {
//         labels: [ 'January', 'February', 'March', 'May' ],
//         datasets: [ { data: [40, 20, 12, 16] } ]
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }
</script>