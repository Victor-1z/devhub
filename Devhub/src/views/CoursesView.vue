
<script setup>
import { ref, computed } from 'vue'

const pesquisa = ref('')
const categoria = ref('Todos')

const cursos = ref([
  {
    id: 1,
    nome: 'HTML e CSS',
    categoria: 'Frontend',
    descricao: 'Aprenda a criar páginas web.',
    favorito: false
  },
  {
    id: 2,
    nome: 'JavaScript',
    categoria: 'Frontend',
    descricao: 'Aprenda lógica e programação web.',
    favorito: false
  },
  {
    id: 3,
    nome: 'Vue.js',
    categoria: 'Frontend',
    descricao: 'Desenvolva aplicações modernas.',
    favorito: false
  },
  {
    id: 4,
    nome: 'Python',
    categoria: 'Backend',
    descricao: 'Conheça uma linguagem versátil.',
    favorito: false
  },
  {
    id: 5,
    nome: 'Node.js',
    categoria: 'Backend',
    descricao: 'Desenvolva aplicações no servidor.',
    favorito: false
  },
  {
    id: 6,
    nome: 'SQL',
    categoria: 'Banco de dados',
    descricao: 'Aprenda a trabalhar com bancos de dados.',
    favorito: false
  }
])

const cursosFiltrados = computed(() => {
  return cursos.value.filter(curso => {
    const nomeCorresponde = curso.nome
      .toLowerCase()
      .includes(pesquisa.value.toLowerCase())

    const categoriaCorresponde =
      categoria.value === 'Todos' ||
      curso.categoria === categoria.value

    return nomeCorresponde && categoriaCorresponde
  })
})

const totalFavoritos = computed(() => {
  return cursos.value.filter(curso => curso.favorito).length
})

function favoritar(curso) {
  curso.favorito = !curso.favorito
}
</script>

<template>
  <section class="container page">
    <h1>Nossos cursos</h1>

    <p>Explore conteúdos e desenvolva suas habilidades.</p>

    <div class="filters">
      <input
        v-model="pesquisa"
        type="text"
        placeholder="Pesquisar curso..."
      />

      <select v-model="categoria">
        <option>Todos</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Banco de dados</option>
      </select>
    </div>

    <p class="favorites">
      ❤️ Cursos favoritos: {{ totalFavoritos }}
    </p>

    <div class="courses">
      <article
        v-for="curso in cursosFiltrados"
        :key="curso.id"
        class="course"
      >
        <span class="category">
          {{ curso.categoria }}
        </span>

        <h2>{{ curso.nome }}</h2>

        <p>{{ curso.descricao }}</p>

        <button @click="favoritar(curso)">
          {{ curso.favorito ? '❤️ Favoritado' : '🤍 Favoritar' }}
        </button>
      </article>
    </div>

    <p v-if="cursosFiltrados.length === 0">
      Nenhum curso encontrado.
    </p>
  </section>
</template>

<style scoped>
.page {
  padding-top: 60px;
}

.page > p {
  margin-top: 15px;
}

.filters {
  display: flex;
  gap: 15px;
  margin: 30px 0 15px;
}

input, select {
  padding: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
}

input {
  flex: 1;
  min-width: 0;
}

.favorites {
  color: #7c3aed;
  font-weight: bold;
  margin-bottom: 20px;
}

.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.course {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 15px #00000010;
}

.category {
  color: #7c3aed;
  font-size: 13px;
  font-weight: bold;
}

.course h2 {
  margin: 15px 0;
}

.course p {
  line-height: 1.5;
}

button {
  margin-top: 20px;
  padding: 11px 15px;
  background: #7c3aed;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

button:hover {
  background: #5b21b6;
}

@media (max-width: 600px) {
  .filters {
    flex-direction: column;
  }
}
</style>
