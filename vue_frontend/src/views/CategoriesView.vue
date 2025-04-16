<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted} from 'vue'
import DatabaseService from '@/services/DatabaseService';

const categories = ref(null)

onMounted(() => {
  DatabaseService.getCategories().then(
    (response) => {
      categories.value = response.data.data
      // console.log(response.data.data)
      // console.log("Got data")
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>

<template>
  <div class="categories">
    <h1>Current Categories</h1>
    <ul>
      <li v-for="cat in categories">{{ cat.category }}</li>
    </ul>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>