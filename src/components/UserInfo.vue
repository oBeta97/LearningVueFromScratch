<template>
  <section>
    <base-card>
      <!-- In questo caso Template con l'attributo v-slot va a dire a vue 
       a quale named slot facciamo riferimento.
       In questo caso allo slot "header" -->
      <template v-slot:header>
        <div class="inner-div">
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </div>
      </template>
      <!-- tutto questo template verrà assegnato allo slot di default! -->
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  props: ['fullName', 'infoText', 'role'],
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