
<template>
  <header class="header">
    <div class="container nav">
      <RouterLink to="/" class="logo">
        Dev<span>Hub</span>
      </RouterLink>

      <nav>
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/cursos">Cursos</RouterLink>
        <RouterLink to="/contato">Contato</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #101828;
  padding: 20px;
  color: white;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

.logo {
  font-size: 26px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.logo span {
  color: #8b5cf6;
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-active {
  color: #a78bfa;
}

@media (max-width: 500px) {
  .nav {
    flex-direction: column;
    gap: 18px;
  }

  nav {
    gap: 15px;
  }
}
</style>
