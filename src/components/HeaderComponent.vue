<template>
  <header>
    <div style="display: flex; justify-content: center; width: 100%;">
      <button @click="$router.push('/')" class="title" style="flex-grow:1; text-align: center;">Ausgaben Tracker</button>
    </div>
    <nav style="display:flex; justify-content: space-evenly;">
      <button @click="$router.push('/')" class="nav-btn">Übersicht</button>
      <button @click="$router.push('/Edit')" class="nav-btn">Bearbeiten</button>
      <button @click="$router.push('/Add')" class="nav-btn">Neu</button>
    </nav>
  </header>
</template>