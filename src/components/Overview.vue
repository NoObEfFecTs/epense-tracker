<template>
    <div class="balance" style="font-size: 25px;">
        <div><strong>Monatsbilanz</strong></div>
        <div>{{formatNumber(balance)}}</div>
    </div>
    <div>
        <h3>Letzte Ausgaben in diesem Monat</h3>
        <ul v-if="latestTransactions.length > 0">
          <li v-for="transaction in latestTransactions" :key="transaction.id">{{transaction}}</li>
        </ul>
      <p v-else>
        Keine Ausgaben in diesem Monat
      </p>
    </div>
    <div>
        
    </div>
</template>

<style scoped>
.balance {
  background-color: rgb(236, 225, 225);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>

<script setup>
import {ref} from 'vue';

const balance = ref(2001.09);
const latestTransactions = ref([]);

const formatNumber = (value) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

</script>