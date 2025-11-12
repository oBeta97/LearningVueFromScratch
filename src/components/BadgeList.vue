<template>
  <section>
    <base-card>
      <!-- In questo caso Template con l'attributo v-slot va a dire a vue 
       a quale named slot facciamo riferimento.
       In questo caso allo slot "header" -->
      <template v-slot:header>
        <h2>Available Badges</h2>
      </template>
      <!-- tutto questo template verrà assegnato allo slot di default! -->
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN"></base-badge>
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR"></base-badge>
        </li>
      </ul>
    </base-card>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  // Definizione LOCALE dei componenti in vue2
  components:{
    BaseCard
  }
};
</script>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>