<template>
  <ul v-for="topic in topics" :key="topic.id">
    <li>
      <h3>{{ topic.title }}</h3>
      <p>{{ topic.description }}</p>
      <button @click="selectedTopic(topic.id)">Learn More</button>
    </li>
  </ul>
</template>

<script setup>
  import { inject } from 'vue';

  // definizione degli eventi che vado ad emettere
  const events = defineEmits(['select-topic']);

  // variabile dove definisco cosa voglio farmi iniettare tramite dependency injection
  const topics = inject('topics');

  // metodo di gestione della selezione di un topic
  const selectedTopic = (idSelected) => {
    events('select-topic', idSelected);
  };
</script>