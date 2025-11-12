<template>
    <div>
        <!-- Tag speciale per identificare che qui ci andrà altro template.
        In questo caso è uno slot generico e il componente accetterà solo
        un contenuto figlio. -->
        <slot></slot>
    </div>
</template>


<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>