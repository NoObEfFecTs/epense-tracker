<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <h1>Expenses tracking app</h1>
        <nav>
          <RouterLink :to="{ name: 'expense-overview' }">Overview | </RouterLink>
          <RouterLink :to="{ name: 'expense-list' }">Expenses | </RouterLink>
          <RouterLink :to="{ name: 'categories' }">Categories | </RouterLink>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <RouterView />
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}

.overview, .about {
  display: flex;
  flex-direction: column;
  align-items: center;
}



/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>