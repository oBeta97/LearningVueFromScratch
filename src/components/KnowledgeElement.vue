<template>
  <ul v-for="topic in topics" :key="topic.id">
    <li>
      <h3>{{ topic.title }}</h3>
      <p>{{ topic.description }}</p>
      <button @click="selectTopicHandler(topic.id)">Learn More</button>
    </li>
  </ul>
</template>

<script setup>
  import { inject } from 'vue';

  // definizione degli eventi che vado ad emettere
  const events = defineEmits(['select-topic']);

  // variabile dove definisco cosa voglio farmi iniettare tramite dependency injection
  const topics = inject('topics');

  // iniezione del metodo di selezione del topic tramite dependency injection
  const selectTopicHandler = inject('selectTopicHandler');
</script>