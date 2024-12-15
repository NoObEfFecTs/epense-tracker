<template>
  <h3>Neue Ausgabe hinzufügen</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="company">
        Unternehmen
      </label>
      <input
        type="text"
        id="amount"
        placeholder="Unternehmen"
        v-model="company"
      />
    </div>
    
    <div class="form-control">
      <label for="amount">
        Betrag <br />
        (negative - expense, positive - income)
      </label>
      <input
        type="text"
        id="amount"
        placeholder="Enter amount..."
        v-model="amount"
      />
    </div>

    <div class="form-control">
      <label for="category">
        Kategorie
      </label>
      <input 
        type="text"
        id="category"
        placeholder="Kategorie"
        v-model="category"
      />
    </div>

    <div class="form-control">
      <label for="buyer">
        Käufer
      </label>
      <br />
      <select v-model="buyer">
        <option>Daniel</option>
      </select>
    </div>

    <div class="form-control">
      <label for="date">
        Datum
      </label>
      <VueDatePicker v-model="date" inline auto-apply :enable-time-picker="false" :month-change-on-scroll="false"  />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const company = ref('');
const amount = ref('');
const category = ref('');
const buyer = ref('');
const date = ref(new Date());

// Get toast interface
const toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
  if (!company.value || !amount.value || !category.value || !buyer.value) {
    // Display a toast error message if either field is empty
    toast.error('All fields must be filled.');
    return;
  }

  const transactionData = {
    company: company.value,
    amount: parseFloat(amount.value),
    buyer: buyer.value,
    category: category.value,
    date: date.value
  };

  emit('transactionSubmitted', transactionData);

  // Clear form fields
  company.value = '';
  amount.value = '';
  category.value = '';
  buyer.value = '';
};

// const format = (date) => {
//   const day = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();

//   return `${day}/${month}/${year}`;
// }
</script>
