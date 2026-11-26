
<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <footer>
    <p>© 2026 DevHub - Plataforma de Estudos</p>
  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f8fafc;
  color: #1e293b;
}

footer {
  background: #101828;
  color: white;
  padding: 25px;
  text-align: center;
  margin-top: 60px;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: auto;
}
</style>
