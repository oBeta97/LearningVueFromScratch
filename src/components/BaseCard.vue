<template>
    <div>

        <header>
            <!-- Con name andiamo a dare un nome al nostro NAMED slot.
             In questo modo chi utilizzerà BaseCard potrà definire chi andrà
             in questo slot e chi nell'altro/altri -->
            <slot name="header"></slot>
        </header>

        <!-- In questo slot anonimo andrà qualunque altro template
         non assegnato al named slot "header" -->
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