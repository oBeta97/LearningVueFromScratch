<template>
  <section>
    <h2>{{ props.topicTitle }}</h2>
    <p>{{ props.text }}</p>
  </section>
</template>

<script setup>

  // definizione delle props in entrata (metodo semplificato)
  const props = defineProps(['topicTitle', 'text']);

</script>