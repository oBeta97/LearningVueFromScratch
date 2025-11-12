<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <random-list>
      <!-- I vari attributi di uno slot vengono forniti dentro ad un oggetto che li racchiude tutti. -->
      <template #default="itemList" >
        <!-- Per accedere ai vari attributi quindi va fatto riferimento al singolo attributo.
         Dato che listItem è all'interno di un v-for non serve iterare i dati -->
        <strong>{{ itemList.listItem }}</strong> - <em>{{ itemList.standardPhrase }}</em>
      </template>
    </random-list>
  </div>
</template>

<script>
import RandomList from './components/RandomList.vue';

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  components:{
    RandomList
  }
};
</script>

<style >
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>