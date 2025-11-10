<template>

    <form @submit.prevent="submitedUser">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name" required />

        <label for="age">Age:</label>
        <input type="number" id="age" v-model.number="user.age" required />

        <button type="submit">Submit</button>
    </form>

</template>


<script setup>
    import { ref } from 'vue';

    const emit = defineEmits([
        'userDataSubmitted'
    ]);

    const user = ref(
        {
            name: '',
            age: null
        }
    )

    var submitedUser = () =>{
        emit('userDataSubmitted', user.value);
    }

</script>


<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
    font-weight: 600;
    color: #333;
}

input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

input:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.3);
}

button {
    padding: 0.75rem 1.5rem;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #0052a3;
}
</style>
