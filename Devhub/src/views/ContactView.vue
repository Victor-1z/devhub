
<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const mensagem = ref('')
const enviado = ref(false)

function enviarFormulario() {
  if (
    !nome.value.trim() ||
    !email.value.trim() ||
    !mensagem.value.trim()
  ) {
    alert('Preencha todos os campos!')
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert('Digite um e-mail válido!')
    return
  }

  enviado.value = true

  nome.value = ''
  email.value = ''
  mensagem.value = ''
}
</script>

<template>
  <section class="container contact">
    <h1>Entre em contato</h1>

    <p>
      Tem alguma dúvida ou sugestão?
      Envie uma mensagem!
    </p>

    <form @submit.prevent="enviarFormulario">
      <label>Nome</label>
      <input v-model="nome" type="text" placeholder="Seu nome" />

      <label>E-mail</label>
      <input v-model="email" type="email" placeholder="Seu e-mail" />

      <label>Mensagem</label>
      <textarea
        v-model="mensagem"
        placeholder="Digite sua mensagem..."
      ></textarea>

      <button type="submit">Enviar mensagem</button>
    </form>

    <p v-if="enviado" class="success">
      Mensagem validada com sucesso!
    </p>
  </section>
</template>

<style scoped>
.contact {
  max-width: 650px;
  padding-top: 60px;
}

.contact > p {
  margin: 15px 0 30px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input, textarea {
  padding: 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
}

textarea {
  min-height: 140px;
  resize: vertical;
}

button {
  background: #7c3aed;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
}

.success {
  color: #15803d;
  font-weight: bold;
}
</style>
