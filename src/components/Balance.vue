<template>
  <h4>Gesamtausgaben</h4>
  <h1 id="balance">{{ total }}€</h1>
  <br/>
  <h4>Zeitraum</h4>
  <VueDatePicker v-model="month" auto-apply month-picker :month-change-on-scroll="false"  />
</template>

<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});
</script>
