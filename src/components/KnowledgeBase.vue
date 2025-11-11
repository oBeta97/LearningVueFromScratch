<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid :topics="props.topics" @select-topic="selectedTopic"></KnowledgeGrid>
  </section>
</template>

<script setup>
  // import del componente KnowledgeGrid
  import KnowledgeGrid from './KnowledgeGrid.vue';

  // definizione delle props (metodo con oggetto per maggiore chiarezza)
  const props = defineProps({
    topics: {
      type: Array,
      required: true,
    }
  });
  
  // definizione degli eventi che vado ad emettere
  const emitEvent = defineEmits(['select-topic']);

  // metodo di gestione della selezione di un topic
  const selectedTopic = (idSelected) => {
    emitEvent('select-topic', idSelected);
  };

</script>