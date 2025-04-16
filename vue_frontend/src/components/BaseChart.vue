<template>
    <label v-if="label">{{ label }}</label>
    <Pie 
        v-bind="$attrs"
        :data="chartData"
        :options="chartOptions"
        class="chart" 
    />
</template>

<script>

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name : 'PieChart',
    components : { Pie },
    computed : {
        chartData() { return },
        chartOptions() { return }
    },
    props : {
        label : {
            type : String,
            default : ''
        }
    }
    
}
</script>

