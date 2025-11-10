<template>

    <h2>Name entered: {{ props.user.name }}</h2>
    <h3>Age entered: {{ props.user.age }}</h3>

</template>


<script setup>
    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })
</script>