<template>

    <form @submit.prevent="friendSubmited">
        <h3>Add a new friend</h3>
        <label for="name">Name:</label>
        <br />
        <input type="text" id="name" v-model="data.name" required />
        <br />
        <label for="phone">Phone (format: 123-456-7890):</label>
        <br />
        <input type="text" id="phone" v-model="data.phone" required />
        <br />
        <br />
        <button type="submit">Add Friend</button>
    </form>

</template>


<script setup>
    import { reactive } from 'vue';

    const emit = defineEmits(['newFriendAdded']);

    const data = reactive({
        name: '',
        phone: ''
    });

    function friendSubmited(){
        emit('newFriendAdded', { name: data.name, phone: data.phone });
        data.name = '';
        data.phone = '';
    }

</script>