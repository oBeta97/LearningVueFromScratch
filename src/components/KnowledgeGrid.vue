<template>
    <KnowledgeElement
      @select-topic="selectedTopic"
    ></KnowledgeElement>
</template>

<script setup>
  // import del componente KnowledgeElement
  import KnowledgeElement from './KnowledgeElement.vue';

  // definizione degli eventi che vado ad emettere
  const emit = defineEmits(['select-topic']);

  // metodo di gestione della selezione di un topic
  const selectedTopic = (event) => {
    emit('select-topic', event);
  };

</script>