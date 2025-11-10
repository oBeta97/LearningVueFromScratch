<script setup>
import { ref } from 'vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

  const userInserted = ref({
    name: 'not inserted yet',
    age: 0
  });

  const updateUserData = (newUser) =>{
    userInserted.value = {
      name: newUser.name,
      age: newUser.age
    };
  }

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
    </div>
  </header>

  <main>
    <ActiveUser :user="userInserted" />
    <UserData @userDataSubmitted="updateUserData" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
