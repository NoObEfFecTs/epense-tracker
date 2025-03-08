<template>
    <HeaderComponent />
    <main class="flex-1 mt-16 p-4" style="margin-top: 10px;">
      <router-view />
    </main>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';

// GET all transactions
fetch('http://localhost:3000',
    {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    }
)
    .then(res => res.json())
    .then(data => {

})
    .catch(err => console.log(err));

// GET latest 5 transactions


// GET transactions this month -> compute sum

// INSERT Transaction

// UPDATE Transaction

// DELETE Transaction


</script>
