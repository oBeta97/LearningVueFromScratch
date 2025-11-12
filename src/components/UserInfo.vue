<template>
  <section>
    <base-card>
      <div class="inner-div">
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  props: ['fullName', 'infoText', 'role'],
  // Definizione LOCALE dei componenti in vue2
  components: {
    BaseCard
  }
};
</script>

<style scoped>
.inner-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>