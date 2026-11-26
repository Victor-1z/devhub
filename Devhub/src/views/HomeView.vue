
<template>
  <section class="hero">
    <div class="container">
      <p class="tag">SEU FUTURO COMEÇA AQUI</p>

      <h1>
        Aprenda programação e
        <span>transforme seu futuro.</span>
      </h1>

      <p class="description">
        Encontre cursos, aprenda novas tecnologias
        e desenvolva suas habilidades.
      </p>

      <RouterLink to="/cursos" class="button">
        Explorar cursos
      </RouterLink>
    </div>
  </section>

  <section class="container benefits">
    <h2>Por que estudar no DevHub?</h2>

    <div class="cards">
      <article>
        <h3>📚 Aprendizado</h3>
        <p>Conteúdos organizados para facilitar seus estudos.</p>
      </article>

      <article>
        <h3>💻 Tecnologia</h3>
        <p>Aprenda ferramentas utilizadas no mercado.</p>
      </article>

      <article>
        <h3>🚀 Evolução</h3>
        <p>Desenvolva projetos e evolua suas habilidades.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(120deg, #101828, #433080);
  color: white;
  padding: 110px 0;
}

.tag {
  color: #c4b5fd;
  font-weight: bold;
  margin-bottom: 20px;
}

h1 {
  font-size: clamp(35px, 6vw, 58px);
  max-width: 750px;
  margin-bottom: 20px;
}

h1 span {
  color: #a78bfa;
}

.description {
  font-size: 18px;
  color: #ddd6fe;
  margin-bottom: 35px;
}

.button {
  display: inline-block;
  background: #8b5cf6;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.benefits {
  padding-top: 65px;
}

.benefits h2 {
  margin-bottom: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.cards article {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 3px 15px #00000010;
}

.cards p {
  margin-top: 15px;
  line-height: 1.6;
}
</style>
