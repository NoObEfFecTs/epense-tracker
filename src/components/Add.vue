<template>
  <h3>Transaktion hinzufügen</h3>
  <form id="form" @submit.prevent="onSubmit">

    <div class="form-control">
      <label for="description">
        Kategorie
      </label>
      <br />
      <select v-model="category">
        <option></option>
        <option></option>
      </select>
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
      <label for="category">
        Bezeichnung
      </label>
      <input
          type="text"
          id="description"
          placeholder="Bezeichnung"
          v-model="description"
      />
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
const description = ref('');
const date = ref(new Date());

// Get toast interface
const toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
  if (!company.value || !amount.value || !category.value || !description.value) {
    // Display a toast error message if either field is empty
    toast.error('All fields must be filled.');
    return;
  }

  const transactionData = {
    company: company.value,
    amount: parseFloat(amount.value),
    description: description.value,
    category: category.value,
    date: date.value
  };

  emit('transactionSubmitted', transactionData);

  // Clear form fields
  company.value = '';
  amount.value = '';
  category.value = '';
  description.value = '';
};

</script>
